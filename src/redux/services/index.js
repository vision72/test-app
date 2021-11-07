import emailjs from 'emailjs-com';

import { contactSubmit } from '../slices/contact.slice';

export const ContactUs = ({ email }) => (dispatch) => {
	try {
		// dispatch payload to reducer.
		// dispatch(contactSubmit());
		emailjs
			.sendForm(`gmail`, API_DETAILS.TEMPLATE_ID, email, API_DETAILS.USER_ID)
			.then((result) => dispatch(contactSubmit(result.text)))
			.catch((error) => console.error(error));
	} catch (e) {
		return console.error(e);
	}
};
