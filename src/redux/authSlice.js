import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null, // No user logged in by default
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload; // Save the user details
    },
    logout: (state) => {
      state.user = null; // Clear the user session
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
