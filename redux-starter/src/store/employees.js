import { createSlice } from "@reduxjs/toolkit";

let id = 0;
export const employeeSlice = createSlice({
  name: "employees",
  initialState: [],
  reducers: {
    addEmployee: (state, action) => {
      state.push({ id: ++id, name: action.payload });
    },
    /* deleteEmployee: (state, action) => {
      return state.filter((employee) => employee.id !== action.payload);
    },
     */ updateEmployee: (state, action) => {},
  },
});

export const { addTask, removeTask, deleteTask } = employeeSlice.actions;
export default employeeSlice.reducer;
