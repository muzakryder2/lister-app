import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("items")) || [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const addItem = createAsyncThunk("items/addItem", async (text) => {
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
});

export const checkItem = createAsyncThunk("items/checkItem", async (itemId) => {
  try {
    return itemId;
  } catch (error) {
    return error;
  }
});

export const deleteItem = createAsyncThunk(
  "items/deleteItem",
  async (itemId) => {
    try {
      return itemId;
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(addItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.items.unshift(action.payload);
        localStorage.setItem("items", JSON.stringify(state.items));
      })
      .addCase(addItem.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.items = state.items.filter((item) => item.id !== action.payload);
        localStorage.setItem("items", JSON.stringify(state.items));
      })
      .addCase(deleteItem.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(checkItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.items = state.items.map((item) =>
          item.id === action.payload
            ? { ...item, isChecked: !item.isChecked }
            : item
        );
        localStorage.setItem("items", JSON.stringify(state.items));
      })
      .addCase(checkItem.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = itemsSlice.actions;
export default itemsSlice.reducer;
