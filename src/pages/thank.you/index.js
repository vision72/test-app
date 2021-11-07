import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function ThankYou() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Thank You! for the response.</Text>
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
		color: '#FCFCFC',
		fontWeight: 'bold'
	}
});
