import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";

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

export const asyncAddItem = createAsyncThunk(
  "items/asyncAddItem",
  async (text) => {
    try {
      const newItem = {
        id: nanoid(),
        text,
        isChecked: false,
      };
      return newItem;
    } catch (error) {
      return error;
    }
  }
);

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
    addItem: (state, action) => {
      const newItem = {
        id: nanoid(),
        text: action.payload,
        isChecked: false,
      };
      state.items.unshift(newItem);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(asyncAddItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(asyncAddItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.items.unshift(action.payload);
      })
      .addCase(asyncAddItem.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset, addItem } = itemsSlice.actions;
export default itemsSlice.reducer;
