import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
	name: 'contact',
	initialState: {
		submitted: false
	},
	reducers: {
		contactSubmit: (state, action) => {
			state.submitted = true;
		}
	}
});

export default contactSlice.reducer;
export const { contactSubmit } = contactSlice.actions;
