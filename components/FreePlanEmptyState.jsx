import React from 'react';
import { Heading, Text, Button, Flex } from '@chakra-ui/react';
import Dashboard from './Dashboard';

const FreePlanEmptyState = () => (
	<Dashboard>
		<Flex p={16} direction='column' align='center'>
			<Heading size='md' mb={4}>
				Get feedback on tour site instantly
			</Heading>
			<Text mb={4}>Start today, then grow with us...</Text>
			<Button variant='solid' size='md'>
				Upgrade to starter
			</Button>
		</Flex>
	</Dashboard>
);

export default FreePlanEmptyState;
