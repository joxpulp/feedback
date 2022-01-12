import React from 'react';
import { Heading, Text, Button, Flex } from '@chakra-ui/react';
import Dashboard from './Dashboard';
import AddSiteModal from './AddSiteModal';

const EmptyState = () => (
	<Dashboard>
		<Flex p={16} direction='column' align='center'>
			<Heading size='md' mb={4}>
				You havent added any sites
			</Heading>
			<Text mb={4}>Lets get started</Text>
			<AddSiteModal />
		</Flex>
	</Dashboard>
);

export default EmptyState;
