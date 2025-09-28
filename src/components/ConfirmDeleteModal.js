// ConfirmDeleteModal.js
import React from "react";

export default function ConfirmDeleteModal({ task, onConfirm, onCancel }) {
  if (!task) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Delete Task</h2>
        <p>
          Are you sure you want to delete <strong>{task.title}</strong>?
        </p>
        <div className="modal-actions">
          <button onClick={onConfirm} className="delete-btn-modal">
            Yes, Delete
          </button>
          <button onClick={onCancel} className="cancel-btn">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
