import React from 'react';
import Card from './Card';
import './Dashboard'; // Import your styles here
import userLineIcon from '../assets/user-line.png';
import { empData, clientData } from '../userData';

export default function Dashboard() {
  const navItems = ['Home', 'Expenses', 'Income', 'Revenue', 'Users', 'Team'];
  

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
          <div className="profile-icon"> 
            <img src={userLineIcon} alt="User Profile "/>
          </div>
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
            <Card   />
            <Card    />
            <Card    />
            <Card    />
            <Card    />
            <Card    />
           
          </div>
        </section>

        {/* Clients Column */}
        <section className="section-column">
          <div className="section-header">Clients</div>
          <div className="card-grid">
            {/* Active Card */}
            <Card  />
            <Card  />
            <Card  />
            <Card  />
            <Card  />
            <Card  />
            {/* 5 Placeholders */}
           
          </div>
        </section>

      </main>
    </div>
  );
}