import { useRef } from 'react';
import {
	Button,
	FormControl,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
	FormErrorMessage,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { addSite } from '../utils/yup';
import { createSite } from '../lib/firestore';

const AddSiteModal = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const initialRef = useRef();
	const finalRef = useRef();

	return (
		<>
			<Button onClick={onOpen}>Add your first site</Button>
			<Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Add Site</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<Formik
							initialValues={{ name: '', link: '' }}
							validationSchema={addSite}
							onSubmit={(values, actions) => {
								createSite(values);
								actions.resetForm();
								// setTimeout(() => {
								// 	actions.setSubmitting(false);
								// }, 2000);
							}}
						>
							{(props) => (
								<Form>
									<Field name='name'>
										{({ field, form }) => (
											<FormControl
												isInvalid={form.errors.name && form.touched.name}
											>
												<FormLabel>Name:</FormLabel>
												<Input
													{...field}
													id='name'
													ref={initialRef}
													placeholder='My Site'
												/>
												<FormErrorMessage>{form.errors.name}</FormErrorMessage>
											</FormControl>
										)}
									</Field>
									<Field name='link'>
										{({ field, form }) => (
											<FormControl
												isInvalid={form.errors.link && form.touched.link}
												mt={4}
											>
												<FormLabel>Link</FormLabel>
												<Input
													{...field}
													id='link'
													ref={initialRef}
													placeholder='https://website.com'
												/>
												<FormErrorMessage>{form.errors.link}</FormErrorMessage>
											</FormControl>
										)}
									</Field>
									<ModalFooter>
										<Button mr={3} onClick={onClose}>
											Cancel
										</Button>
										<Button
											backgroundColor='#99FFFE'
											_hover={{ bg: '#90e4e2' }}
											type='submit'
											// isLoading={props.isSubmitting}
										>
											Create
										</Button>
									</ModalFooter>
								</Form>
							)}
						</Formik>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default AddSiteModal;
