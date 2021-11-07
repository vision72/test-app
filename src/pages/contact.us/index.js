import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function ContactUs() {
	// TODO: add your code here.
	// create a contact us form with 4 fields
	// with all the necessary validations,
	// fields will be Name, Mobile Number, Email, and message, and a submit button

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Contact us Page.</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		fontSize: 24,
		fontWeight: 'bold'
	}
});
