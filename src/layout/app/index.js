import React from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import { ContactUs, ThankYou } from '../../pages';

// customStyles for some styles that we want to add/update on the layout.
export default function AppLayout({ children, customStyles }) {
	const { submitted } = useSelector((state) => state.user);

	/* since anyone can contact us, 
	there is no need for private routes. */
	return <View style={[ styles.container, customStyles ]}>{submitted ? <ThankYou /> : <ContactUs />}</View>;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		borderRadius: 8,
		backgroundColor: '#FCFCFC'
	}
});
