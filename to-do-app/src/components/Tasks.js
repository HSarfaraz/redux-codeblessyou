import React, { useEffect, useState } from "react";

import { loadTasks } from "../store/tasks"; // Import the apiRequested action creator
import { useDispatch, useSelector } from "react-redux";

const Tasks = () => {
  const dispatch = useDispatch();

  const { tasks, loading } = useSelector((state) => state.tasks);
  useEffect(() => {
    dispatch(loadTasks());
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>
            {tasks.map((task) => (
              <p key={task.id}>{task.task}</p>
            ))}
          </h1>
        </div>
      )}
    </>
  );
};

export default Tasks;
