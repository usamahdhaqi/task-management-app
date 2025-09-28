import React from "react";

export default function FilterBar({ setFilter }) {
  return (
    <div className="filter-bar">
      <button className="all" onClick={() => setFilter("all")}>All</button>
      <button className="work" onClick={() => setFilter("Work")}>Work</button>
      <button className="personal" onClick={() => setFilter("Personal")}>Personal</button>
      <button className="urgent" onClick={() => setFilter("Urgent")}>Urgent</button>
    </div>
  );
}
