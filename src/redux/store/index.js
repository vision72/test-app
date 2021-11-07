import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import contactReducer from '../slices';

const reducer = combineReducers({
	// here are all the reducers for the store.
	user: contactReducer
});

const store = configureStore({
	reducer
});

export default store;
