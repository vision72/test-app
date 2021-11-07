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
// I thought to go ahead and use states just to switch between tabs
export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<Provider store={store}>
				{/* since anyone can contact us, 
                there is no need for private routes. */}
				<AppLayout>
					<ContactUs />
				</AppLayout>
			</Provider>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#D9D9D9'
	}
});
