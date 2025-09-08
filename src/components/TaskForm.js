import React, { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [label, setLabel] = useState("Work");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    onAdd({ title, label, dueDate });
    setTitle("");
    setDueDate("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Task title..." value={title} onChange={(e) => setTitle(e.target.value)} />
      <select value={label} onChange={(e) => setLabel(e.target.value)}>
        <option>Work</option>
        <option>Personal</option>
        <option>Urgent</option>
      </select>
      <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
}
