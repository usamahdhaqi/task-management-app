// App.js
import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import useLocalStorage from "./hooks/useLocalStorage";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import FilterBar from "./components/FilterBar";
import "./App.css";

function App() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [filter, setFilter] = useState("all");

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), status: "todo" }]);
  };

  const updateTask = (id, updates) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, ...updates } : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = filter === "all" ? tasks : tasks.filter((t) => t.label === filter);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app-container">
        <h1>Task Management App</h1>
        <TaskForm onAdd={addTask} />
        <FilterBar setFilter={setFilter} />
        <div className="task-board">
          <TaskList
            title="To Do"
            status="todo"
            tasks={filteredTasks.filter((t) => t.status === "todo")}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
          <TaskList
            title="In Progress"
            status="inprogress"
            tasks={filteredTasks.filter((t) => t.status === "inprogress")}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
          <TaskList
            title="Done"
            status="done"
            tasks={filteredTasks.filter((t) => t.status === "done")}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
