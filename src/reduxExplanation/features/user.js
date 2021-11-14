import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { name: "", age: 0, email: "" };

export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialStateValue },
  reducers: {
    login: (state, action) => {
      // its automatically generates action with same name
      console.log("action", action);
      state.value = action.payload;
    },
    logOut: (state, action) => {
      // just to clear original state
      state.value = initialStateValue;
    }
  }
});

export const { login, logOut } = userSlice.actions; // exporting actions generated inside createSlice

export default userSlice.reducer;

// action : payload - pass information you might use when u change your state
// type different type of actions
