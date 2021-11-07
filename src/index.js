/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, SafeAreaView } from 'react-native';

import { store } from './redux';
import { AppLayout } from './layout';
import { ContactUs, ThankYou } from './pages';

// rather than using react-navigation & making the application heavy,
// I thought to go ahead and use states just to switch between tabs.
// For pages, checkout AppLayout component
export default function App() {
	return (
		<Provider store={store}>
			<SafeAreaView style={styles.container}>
				<AppLayout customStyles={{ backgroundColor: '#7795' }} />
			</SafeAreaView>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#D9D9D9'
	}
});
