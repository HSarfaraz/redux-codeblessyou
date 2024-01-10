import React from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  return (
    <div>
      <AddTask />
      <Tasks />
    </div>
  );
};

export default App;
