import { Box, Button, Flex, Icon, Text } from '@chakra-ui/react';
import EmptyState from '../components/EmptySate';
import FreePlanEmptyState from '../components/FreePlanEmptyState';
import { useAuth } from '../lib/auth';
import { Logo } from '../styles/icons';

export default function Dashboard() {
	const auth = useAuth();

	if (!auth.user) {
		return <Text>Loading...</Text>;
	}

	return <EmptyState />;
}
