import { createSlice } from "@reduxjs/toolkit";

export const memberSlice = createSlice({
  name: "members",
  initialState: {
    value: null,
  },
  reducers: {
    setMembers: (state, action) => {
      state.value = action.payload;
    },

    addMember: (state, action) => {
      const updatedMembers = [...state.value];
      updatedMembers.push(action.payload);
      state.value = updatedMembers;
    },
  },
});

export const { setMembers, addMember } = memberSlice.actions;
export default memberSlice.reducer;
