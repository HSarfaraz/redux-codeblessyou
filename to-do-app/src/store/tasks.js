import {
  createAction,
  createReducer,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const initialState = {
  tasks: [],
  loading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    //action: function
    apiRequested: (state, action) => {
      state.loading = true;
    },
    apiRequestFailed: (state, action) => {
      state.loading = false;
    },
    getTasks: (state, action) => {
      state.tasks = action.payload;
      state.loading = false;
    },
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action) => {
      // state.splice(action.payload.id, 1)
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      state.tasks.splice(index, 1);
    },
    completedTask: (state, action) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload);
      state.tasks[index].completed = action.payload.completed;
    },
  },
  /* extraReducers: {
    [fetchTasks.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchTasks.fulfilled]: (state, action) => {
      state.tasks = action.payload.tasks;
      state.loading = false;
    },
    [fetchTasks.rejected]: (state, action) => {
      state.error = action.payload.error;
      state.loading = false;
    },
  }, */
});

console.log(tasksSlice);
export const { getTasks, addTask, removeTask, completedTask } =
  tasksSlice.actions;
export default tasksSlice.reducer;

const url = "/tasks";

export const loadTasks = () => {
  return apiCallBegan({
    url: url,
    onStart: apiRequested.type,
    onSuccess: getTasks.type,
    onError: apiRequestFailed.type,
  });
};

export const addNewTasks = (task) => {
  /* return apiCallBegan({
    url: url,
    method: "POST",
    data: task,
    onSuccess: addTask.type,
  }); */
  return apiCallBegan({
    url: url,
    method: "POST",
    data: task,
    onSuccess: addTask.type,
  });
};

export const updateCompleted = (task) =>
  apiCallBegun({
    // tasks/6
    url: `${url}/${task.id}`,
    method: "PATCH",
    data: task,
    onSuccess: completedTask.type,
  });

export const deletedTask = (task) =>
  apiCallBegun({
    // tasks/6
    url: `${url}/${task.id}`,
    method: "DELETE",
    onSuccess: removeTask.type,
  });

//Actions
/* export const addTask = createAction("ADD_TASK");
export const removeTask = createAction("REMOVE_TASK");
export const completedTask = createAction("COMPLETED_TASK");
console.log(addTask("Task 3")); */
/* 
export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: { task: "TASK 1" },
  };
};

export const removeTask = (id) => {
  return {
    type: REMOVE_TASK,
    payload: { id: id },
  };
};

export const completedTask = (id) => {
  return {
    type: TASK_COMPLETED,
    payload: { id: id },
  };
}; */

//using thunk
export const fetchTodo = () => async (dispatch) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  //convert output into json format
  const task = await response.json();
  dispatch(addTask(task.title));
};

//reducer
let id = 0;

//using mutable code
/* export default createReducer([], {
  //to get the dynamic values, we can write in square bracket
  [addTask.type]: (state, action) => {
    state.push({
      id: ++id,
      task: action.payload.id,
      completed: false,
    });
  },
  [removeTask.type]: (state, action) => {
    const index = state.findIndex((task) => task.id === action.payload.id);
    state.splice(index, 1);
  },
  [completedTask.type]: (state, action) => {
    const index = state.findIndex((task) => task.id === action.payload.id);
    state[index].completed = true;
  },
}) */

//immutable code
//reducer is a pure function, which says how to do
/* export default function reducer(state = [], action) {
  switch (action.type) {
    case addTask.type:
      return [
        ...state,
        {
          id: ++id,
          task: action.payload.id,
          completed: false,
        },
      ];
    case removeTask.type:
      return state.filter((task) => task.id !== action.payload.id);
    case completedTask.type:
      return state.map((task) =>
        task.id === action.payload.id
          ? {
              ...task,
              completed: true,
            }
          : task
      );
    default:
      return state;
  }
} */
