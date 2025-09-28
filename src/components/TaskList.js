import React from "react";
import { useDrop } from "react-dnd";
import TaskCard from "./TaskCard";

export default function TaskList({ title, status, tasks, updateTask, deleteTask, setEditingTask }) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "TASK",
    drop: (item) => updateTask(item.id, { status }),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div ref={drop} className={`task-column ${isOver ? "highlight" : ""}`}>
      <h2>{title}</h2>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          onEdit={(t) => setEditingTask(t)} // ✅ sekarang sudah valid
        />
      ))}
    </div>
  );
}
