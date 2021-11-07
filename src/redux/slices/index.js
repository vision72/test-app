import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
	name: 'contact',
	initialState: {
		submitted: null
	},
	reducers: {
		contactSubmit: (state, payload) => {
			state.submitted = action.payload;
		}
	}
});

export default contactSlice.reducer;
export const { contactSubmit } = contactSlice.actions;
