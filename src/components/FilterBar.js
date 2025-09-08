import React from "react";

export default function FilterBar({ setFilter }) {
  return (
    <div className="filter-bar">
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("Work")}>Work</button>
      <button onClick={() => setFilter("Personal")}>Personal</button>
      <button onClick={() => setFilter("Urgent")}>Urgent</button>
    </div>
  );
}
