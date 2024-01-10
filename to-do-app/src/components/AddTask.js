import React, { useState } from "react";
import { addNewTasks } from "../store/tasks";
import { useDispatch } from "react-redux";

const AddTask = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewTasks({ task: task }));
    setTask("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" placeholder="Enter new task" />
        <button type="submit" onChange={(e) => setTask(e.target.value)}>
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
