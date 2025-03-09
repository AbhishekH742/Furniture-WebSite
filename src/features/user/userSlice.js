import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  name: "",
  email: "",
  password: "",
  address: "",
  city: "",
  state: "",
  phone: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.address = action.payload.address;
      state.city = action.payload.city;
      state.state = action.payload.state;
      state.phone = action.payload.phone;
    },
    setSignOutState: (state) => {
      state.name = null;
      state.email = null;
      state.password = null;
      state.address = null;
      state.city = null;
      state.state = null;
      state.phone = null;
    },
  },
});

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPassword = (state) => state.user.password;
export const selectUserAddress = (state) => state.user.address;
export const selectUserCity = (state) => state.user.city;
export const selectUserState = (state) => state.user.state;
export const selectUserPhone = (state) => state.user.phone;
export default userSlice.reducer;

/*

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  name: "",
  email: "",
  password: "",
  address: "",
  city: "",
  state: "",
  phone: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.address = action.payload.address;
      state.city = action.payload.city;
      state.state = action.payload.state;
      state.phone = action.payload.phone;
    },
    setSignOutState: (state) => {
      state.name = null;
      state.email = null;
      state.password = null;
      state.address = null;
      state.city = null;
      state.state = null;
      state.phone = null;
    },
  },
});

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;
export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPassword = (state) => state.user.password;
export const selectUserAddress = (state) => state.user.address;
export const selectUserCity = (state) => state.user.city;
export const selectUserState = (state) => state.user.state;
export const selectUserPhone = (state) => state.user.phone;
export default userSlice.reducer;


*/
