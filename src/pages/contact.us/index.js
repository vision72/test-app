import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Dimensions, Button } from 'react-native';

export default function ContactUs() {
	// TODO: add your code here.
	// create a contact us form with 4 fields
	// with all the necessary validations,
	// fields will be Name, Mobile Number, Email, and message, and a submit button

	// const [ name, setName ] = useState('');
	// const nameHandler = () => {
	// setName('name');
	// };

	return (
		<View style={styles.container}>
			<Text
				style={{
					alignItems: 'center',
					fontWeight: 'bold',
					fontSize: 50,
					paddingTop: 20,
					color: '#d9d9d9'
				}}
			>
				Contact Us
			</Text>
			<TextInput placeholder="Name" style={styles.name} />
			<TextInput placeholder="Email" style={styles.name} />
			<TextInput placeholder="Mobile Number" style={styles.name} />
			<View style={styles.button}>
				<Button title="Submit" />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	text: {
		fontSize: 24,
		fontWeight: 'bold'
	},
	name: {
		margin: 20,
		padding: 10,
		borderBottomWidth: 1,
		borderColor: '#000000',
		width: Dimensions.get('screen').width / 1.3
	},
	button: {
		fontWeight: 'bold',
		backgroundColor: '#b8860b'
	}
});
