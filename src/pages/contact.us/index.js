import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Dimensions, Alert } from 'react-native';

import { ContactService } from '../../redux/services';

export default function ContactUs() {
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ mobile, setMobile ] = useState('');
	const dispatch = useDispatch();

	const contactUs = () => {
		if (name.length < 3 || email < 3 || mobile.length < 3) {
			Alert.alert('Please fill all the details');
			return;
		}
		let email_reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
		let mobile_reg = /\+?\d[\d -]{8,12}\d/;
		if (email_reg.test(email) && mobile_reg.test(mobile)) {
			dispatch(ContactService({ email }));
		} else {
			Alert.alert('Aborting... email/phone incorrect');
			return;
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.formContainer}>
				<Text style={styles.heading}>Contact Us</Text>
				<TextInput
					placeholder={'Full Name'}
					placeholderTextColor={'#D9D9D9'}
					value={name}
					onChangeText={setName}
					style={styles.input}
					keyboardType={'name-phone-pad'}
				/>
				<TextInput
					placeholder={'Email Address'}
					placeholderTextColor={'#D9D9D9'}
					value={email}
					onChangeText={setEmail}
					style={styles.input}
					keyboardType={'email-address'}
				/>
				<TextInput
					placeholder={'Mobile Number'}
					placeholderTextColor={'#D9D9D9'}
					value={mobile}
					onChangeText={setMobile}
					keyboardType={'number-pad'}
					style={styles.input}
				/>
				<TouchableOpacity onPress={contactUs} style={styles.button}>
					<Text style={{ fontSize: 14 }}>Contact Us</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	formContainer: {
		elevation: 5,
		borderRadius: 8,
		paddingVertical: 32,
		paddingHorizontal: 16,
		backgroundColor: '#FCFCFC',
		top: Dimensions.get('window').height / 5
	},
	heading: {
		fontSize: 42,
		color: '#5bc0de',
		fontWeight: 'bold'
	},
	image: {
		width: 20,
		height: 20,
		resizeMode: 'cover'
	},
	input: {
		margin: 12,
		color: '#000',
		borderBottomWidth: 1
	},
	button: {
		padding: 16,
		elevation: 5,
		marginTop: 24,
		borderRadius: 8,
		fontWeight: 'bold',
		marginHorizontal: 12,
		alignSelf: 'flex-end',
		backgroundColor: '#5bc0de'
	}
});
