/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React from "react";

// UI local components
import TaskListLayout from "./components/organisms/TaskListLayout/TaskListLayout";

//  Context
import { TasksContextProvider } from "./context/TasksContext";

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */

function App() {
  return (
    <TasksContextProvider>
      <TaskListLayout />
    </TasksContextProvider>
  );
}

export default App;
