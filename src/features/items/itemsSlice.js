import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { id: 1, text: "Item 1", isChecked: false },
    { id: 2, text: "Item 2", isChecked: false },
    { id: 3, text: "Item 3", isChecked: true },
    { id: 4, text: "Item 4", isChecked: true },
    { id: 5, text: "Item 5", isChecked: false },
  ],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {},
});

export const { reset } = itemsSlice.actions;
export default itemsSlice.reducer;
