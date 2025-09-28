// App.js
import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import useLocalStorage from "./hooks/useLocalStorage";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import FilterBar from "./components/FilterBar";
import EditTaskModal from "./components/EditTaskModal";
import ConfirmDeleteModal from "./components/ConfirmDeleteModal";
import "./App.css";

function App() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [filter, setFilter] = useState("all");

  // modal states
  const [editingTask, setEditingTask] = useState(null);
  const [deletingTask, setDeletingTask] = useState(null);

  // safe functional updates to avoid stale state
  const addTask = (task) => {
    setTasks((prev) => [...prev, { ...task, id: Date.now(), status: "todo" }]);
  };

  const updateTask = (id, updates) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, ...updates } : task))
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const filteredTasks = filter === "all" ? tasks : tasks.filter((t) => t.label === filter);

  // progress
  const totalTasks = tasks.length;
  const doneTasks = tasks.filter((t) => t.status === "done").length;
  const progress = totalTasks > 0 ? Math.round((doneTasks / totalTasks) * 100) : 0;

  // handle modal save
  const handleEditSave = (updatedTask) => {
    setTasks((prev) => prev.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
    setEditingTask(null);
  };

  // handle delete confirm
  const handleDeleteConfirm = () => {
    if (deletingTask) {
      deleteTask(deletingTask.id);
      setDeletingTask(null);
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app-container">
        <h1>Task Management App</h1>
        <TaskForm onAdd={addTask} />
        <FilterBar setFilter={setFilter} />

        {/* Progress */}
        <div className="progress-container">
          <div className="progress-info">
            <span>{doneTasks}/{totalTasks} tasks completed</span>
            <span>{progress}%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="task-board">
          <TaskList
            title="To Do"
            status="todo"
            tasks={filteredTasks.filter((t) => t.status === "todo")}
            updateTask={updateTask}
            deleteTask={deleteTask}
            setEditingTask={setEditingTask}
            setDeletingTask={setDeletingTask}
          />
          <TaskList
            title="In Progress"
            status="inprogress"
            tasks={filteredTasks.filter((t) => t.status === "inprogress")}
            updateTask={updateTask}
            deleteTask={deleteTask}
            setEditingTask={setEditingTask}
            setDeletingTask={setDeletingTask}
          />
          <TaskList
            title="Done"
            status="done"
            tasks={filteredTasks.filter((t) => t.status === "done")}
            updateTask={updateTask}
            deleteTask={deleteTask}
            setEditingTask={setEditingTask}
            setDeletingTask={setDeletingTask}
          />
        </div>

        {/* Modals */}
        {editingTask && (
          <EditTaskModal
            task={editingTask}
            onSave={handleEditSave}
            onClose={() => setEditingTask(null)}
          />
        )}

        {deletingTask && (
          <ConfirmDeleteModal
            task={deletingTask}
            onConfirm={handleDeleteConfirm}
            onCancel={() => setDeletingTask(null)}
          />
        )}
      </div>
    </DndProvider>
  );
}

export default App;
