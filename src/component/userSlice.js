import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      //   console.log(action);
      state.user = { ...action.payload };
    },
  },
});

export const { updateUser } = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;
