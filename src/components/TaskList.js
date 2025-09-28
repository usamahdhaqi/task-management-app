import React from "react";
import { useDrop } from "react-dnd";
import TaskCard from "./TaskCard";

export default function TaskList({ title, status, tasks, updateTask, deleteTask }) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "TASK",
    drop: (item) => {
      if (item.status !== status) {
        updateTask(item.id, { status });
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`task-column ${isOver ? "highlight" : ""}`}
    >
      <h2>{title}</h2>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
}
