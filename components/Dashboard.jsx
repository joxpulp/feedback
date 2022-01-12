import React from 'react';
import {
	Flex,
	Link,
	Stack,
	Avatar,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Heading,
	Box,
} from '@chakra-ui/react';
import { Logo } from '../styles/icons';
import { useAuth } from '../lib/auth';

const Dashboard = ({ children }) => {
	const auth = useAuth();

	return (
		<Flex flexDirection='column'>
			<Flex
				flexDirection='row'
				justifyContent='space-between'
				alignItems='center'
				backgroundColor='white'
				m={4}
			>
				<Stack
					spacing={4}
					isInline
					alignItems='center'
					justifyContent='flex-start'
				>
					<Logo boxSize={8} />
					<Link display='block'>Feedback</Link>
					<Link>Sites</Link>
				</Stack>
				<Stack spacing={2} alignItems='center' isInline>
					<Link>Account</Link>
					<Avatar size='sm' src={auth.user.photoUrl} />
				</Stack>
			</Flex>
			<Flex
				backgroundColor='gray.100'
				justifyContent='center'
				height='100vh'
				p={8}
			>
				<Flex w='800px' maxWidth='800px' flexDirection='column'>
					<Breadcrumb>
						<BreadcrumbItem>
							<BreadcrumbLink>Sites</BreadcrumbLink>
						</BreadcrumbItem>
					</Breadcrumb>
					<Heading>Sites</Heading>
					<Box mt={4} backgroundColor='white' borderRadius={4} p={8}>
						{children}
					</Box>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Dashboard;
