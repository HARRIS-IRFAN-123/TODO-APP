// todoSlice.js
import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload.text,
        persons: 0,
      });
    },
    incrementPersons: (state, action) => {
      const todo = state.find((t) => t.id === action.payload.id);
      if (todo) {
        todo.persons += 1;
      }
    },
    decrementPersons: (state, action) => {
      const todo = state.find((t) => t.id === action.payload.id);
      if (todo) {
        todo.persons -= 1;
      }
    },
    resetPersons: (state) => {
      state.forEach((task) => {
        task.persons = 0;
      });
    },
    deleteTodo: (state, action) => {
      return state.filter((task) => task.id !== action.payload.id);
    },
    editTodo: (state, action) => {
      const todo = state.find((t) => t.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
    },
  },
});

export const {
  addTodo,
  incrementPersons,
  decrementPersons,
  resetPersons,
  deleteTodo,
  editTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
