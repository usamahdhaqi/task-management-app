// TaskCard.js
import React from "react";
import { useDrag } from "react-dnd";
import { format } from "date-fns";

export default function TaskCard({ task, deleteTask, onEdit, onDelete }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "TASK",
    item: { id: task.id, status: task.status },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const due = task.dueDate ? format(new Date(task.dueDate), "dd MMM yyyy") : "No deadline";

  return (
    <div
      ref={drag}
      className={`task-card label-${task.label.toLowerCase()}`}
      style={{
        opacity: isDragging ? 0.6 : 1,
        transform: isDragging ? "scale(1.05)" : "scale(1)",
        position: "relative",
      }}
    >
      {/* Tombol Edit */}
      <button
        className="edit-btn"
        onClick={() => onEdit(task)}
        aria-label="Edit task"
      >
        {/* SVG pensil */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      </button>

      {/* Tombol Hapus */}
      <button
        className="delete-btn"
        onClick={() => onDelete(task)} // ✅ buka modal konfirmasi
        aria-label="Delete task"
      >
        {/* SVG Trash */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6l-1 14H6L5 6" />
          <path d="M10 11v6" />
          <path d="M14 11v6" />
          <path d="M9 6V4h6v2" />
        </svg>
      </button>

      <h3>{task.title}</h3>
      <p className={`due ${new Date(task.dueDate) < new Date() ? "overdue" : ""}`}>{due}</p>
    </div>
  );
}
