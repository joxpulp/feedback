import React, { useState, useEffect, useContext, createContext } from 'react';
import firebase from './firebase';
import { createUser } from './firestore';

const formatUser = (user) => {
	return {
		uid: user.uid,
		email: user.email,
		name: user.displayName,
		provider: user.providerData[0].providerId,
		photoUrl: user.photoURL,
	};
};

const useProvideAuth = () => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const handleUser = (rawUser) => {
		if (rawUser) {
			const user = formatUser(rawUser);
			createUser(user.uid, user);
			setUser(user);
			setLoading(false);
			return user;
		} else {
			setLoading(false);
			setUser(false);
			return false;
		}
	};

	const signinWithGitHub = async () => {
		setLoading(true);
		const { user } = await firebase
			.auth()
			.signInWithPopup(new firebase.auth.GithubAuthProvider());

		handleUser(user);
	};

	const signout = async () => {
		await firebase.auth().signOut();
		return handleUser(false);
	};

	useEffect(() => {
		const unsubscribe = firebase.auth().onAuthStateChanged(handleUser);

		return () => unsubscribe();
	}, []);

	return {
		user,
		signinWithGitHub,
		signout,
	};
};

const authContext = createContext();

export function AuthProvider({ children }) {
	const auth = useProvideAuth();

	return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
	return useContext(authContext);
};
