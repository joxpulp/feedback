import * as Yup from 'yup';

export const addSite = Yup.object({
	name: Yup.string().required('Site name is required'),
	link: Yup.string()
		.url('This must be a valid URL')
		.required('Link is required'),
});
