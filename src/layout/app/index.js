import React from 'react';
import { View, StyleSheet } from 'react-native';

// customStyles for some styles that we want to add/update on the layout.
export default function AppLayout({ children, customStyles }) {
	return <View style={[ styles.container, customStyles ]}>{children}</View>;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		borderRadius: 8,
		backgroundColor: '#FcFcFc'
	}
});
