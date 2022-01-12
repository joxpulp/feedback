import { Box, Button, Flex, Icon, Text } from '@chakra-ui/react';
import { useAuth } from '../lib/auth';
import { Logo } from '../styles/icons';

export default function Home() {
	const auth = useAuth();

	return (
		<Flex
			as='main'
			width='100%'
			height='100%'
			justify='center'
			align='center'
			direction='column'
		>
			<Logo boxSize='32px' mb={4} />
			<Button onClick={(e) => auth.signinWithGitHub()}>Sign In</Button>
		</Flex>
	);
}
