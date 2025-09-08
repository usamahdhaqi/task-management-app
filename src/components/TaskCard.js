import React from "react";
import { useDrag } from "react-dnd";
import { format } from "date-fns";

export default function TaskCard({ task, deleteTask }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "TASK",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const due = task.dueDate ? format(new Date(task.dueDate), "dd MMM yyyy") : "No deadline";

  return (
    <div
      ref={drag}
      className={`task-card ${task.label.toLowerCase()}`}
      style={{
        opacity: isDragging ? 0.6 : 1,
        transform: isDragging ? "scale(1.05)" : "scale(1)",
      }}
    >
      <h3>{task.title}</h3>
      <p className="label">{task.label}</p>
      <p className={`due ${new Date(task.dueDate) < new Date() ? "overdue" : ""}`}>{due}</p>
      <div className="actions">
        <button onClick={() => deleteTask(task.id)}>❌</button>
      </div>
    </div>
  );
}
