// EditTaskModal.js
import React, { useState, useEffect } from "react";

export default function EditTaskModal({ task, onSave, onClose }) {
  const [title, setTitle] = useState("");
  const [label, setLabel] = useState("Work");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setLabel(task.label);
      setDueDate(task.dueDate || "");
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...task, title, label, dueDate });
  };

  if (!task) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Edit Task</h2>
        <form onSubmit={handleSubmit} className="modal-form">
          <input
            type="text"
            value={title}
            placeholder="Task title..."
            onChange={(e) => setTitle(e.target.value)}
          />
          <select value={label} onChange={(e) => setLabel(e.target.value)}>
            <option>Work</option>
            <option>Personal</option>
            <option>Urgent</option>
          </select>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />

          <div className="modal-actions">
            <button type="submit">Save</button>
            <button type="button" onClick={onClose} className="cancel-btn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
