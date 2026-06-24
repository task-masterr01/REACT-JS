import React from 'react';

export default function Card({ isActive, type, name, badgeText }) {
  // If it's just an empty placeholder card
  if (!isActive) {
    return <div className="card placeholder-card"></div>;
  }

  // Active card layout (Employees or Clients)
  return (
    <div className="card active-card">
      <div className="card-top">
        <span className="status-dot"></span>
        <span className="card-title">{name || 'Name'}</span>
        <span className={`badge yellow-badge ${type === 'client' ? 'mini-text' : ''}`}>
          {badgeText}
        </span>
        <span className="more-options">•••</span>
      </div>
      
      <div className="card-body-blue"></div>
      
      <div className="card-actions">
        <button className="btn btn-outline">
          {type === 'employee' ? 'Assign Task' : 'Updates'}
        </button>
        <button className="btn btn-orange">Send msg</button>
      </div>
    </div>
  );
}