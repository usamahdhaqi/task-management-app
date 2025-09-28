// src/components/TaskList.js
import React from "react";
import { useDrop } from "react-dnd";
import TaskCard from "./TaskCard";

export default function TaskList({
  title,
  status,
  tasks,
  updateTask,
  deleteTask,
  setEditingTask,
  setDeletingTask,
}) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "TASK",
    drop: (item) => {
      // hanya update kalau status berubah (menghindari re-render redundant)
      if (item.status !== status) {
        updateTask(item.id, { status });
      }
    },
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
          // jangan panggil delete langsung di sini — kita tunjukkan modal
          onEdit={() => setEditingTask(task)}
          onDelete={() => setDeletingTask(task)}
        />
      ))}
    </div>
  );
}
