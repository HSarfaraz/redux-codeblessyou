import store from "./store/configureStore";
/* import { removeTask, completedTask, addTask } from "./store/tasks";
import addEmployee from "./store/employees"; */
import axios from "axios";
import { fetchTasks, getTasks, loadTasks } from "./store/tasks";
import { apiCallBegan } from "./store/api";

//runs every time when there is change in reduce store
/* const unsubscribe = store.subscribe(() => {
  console.log("Updated", store.getState());
});

store.dispatch(addTask({ task: "Task 1" }));
store.dispatch(addTask({ task: "Task 2" }));
console.log(store.getState());

unsubscribe();

store.dispatch(completedTask({ id: 2 }));
// console.log(store.getState());

store.dispatch(removeTask({ id: 1 }));
// store.dispatch(fetchTodo());
console.log(store.getState());
 */

// store.dispatch(addEmployee({ name: "Harley" }));

// store.dispatch({ type: "SHOW_ERROR", payload: { error: "User not found" } });

//consuming API
/* const gettingTasks = async () => {
  try {
    //calling API
    const response = await axios.get("http://localhost:5000/api/tasks");
    console.log(response);
    //Dispatch action
    store.dispatch(getTasks({ tasks: response.data }));
  } catch (error) {
    store.dispatch({ type: "SHOW_ERROR", payload: { error: error.message } });
  }
};

gettingTasks(); */
// store.dispatch(fetchTasks());
store.dispatch(loadTasks());

// store.dispatch(addNewTasks({ task: "Complete this exercise" }));

store.dispatch(updateCompleted({ id: 6, completed: true }));
store.dispatch(deleteTask({ id: 6 }));
