import { API_URL } from '../../utils';
import { contactSubmit } from '../slices';

export const ContactService = ({ email }) => (dispatch) => {
	try {
		// dispatch payload & update the reducer.
		fetch(`${API_URL}?email=${email}`)
			.then((response) => dispatch(contactSubmit(response.json())))
			.catch((error) => console.error(error));
	} catch (error) {
		return console.error(error);
	}
};
