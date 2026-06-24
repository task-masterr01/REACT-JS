import React from 'react';
import Card from './Card';
import './Dashboard'; // Import your styles here

export default function Dashboard() {
  const navItems = ['Home', 'Expenses', 'Income', 'Revenue', 'Users', 'Team'];
  
  // Quick arrays to map out the 5 placeholder cards per section
  const placeholders = Array(5).fill(null);

  return (
    <div className="dashboard-container">
      
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-links">
          {navItems.map((item, index) => (
            <a key={index} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </div>
        <div className="nav-icons">
          <div className="profile-icon"></div>
          <div className="hamburger-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="main-content">
          
        {/* Employees Column */}
        <section className="section-column">
          <div className="section-header">Employees</div>
          <div className="card-grid">
            {/* Active Card */}
            <Card isActive={true} type="employee" name="Name" badgeText="Post" />
            {/* 5 Placeholders */}
            {placeholders.map((_, idx) => <Card key={`emp-empty-${idx}`} isActive={false} />)}
          </div>
        </section>

        {/* Clients Column */}
        <section className="section-column">
          <div className="section-header">Clients</div>
          <div className="card-grid">
            {/* Active Card */}
            <Card isActive={true} type="client" name="Name" badgeText="Company name" />
            {/* 5 Placeholders */}
            {placeholders.map((_, idx) => <Card key={`cli-empty-${idx}`} isActive={false} />)}
          </div>
        </section>

      </main>
    </div>
  );
}