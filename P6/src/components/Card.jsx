import React from 'react';
import './Card.css'; 

export default function Card({ type, data }) {
  const isEmp = type === 'employee';

  return (
    <div className="card bg-[#f2f2f2] shadow-md" style={cardStyle}>
      
      {/* 🛠️ ADDED FLEXBOX STYLES TO THIS DIRECT PARENT */}
      <div 
        className="card-info shadow-md rounded-xl" 
        style={{ display: 'flex', alignItems: 'center', gap: '12px', position: 'relative' }}
      >
        {/* Profile Picture Wrapper */}
        <div className='w-12 h-12' style={{ width: '48px', height: '48px', flexShrink: 0 }}>
          <img 
            src={data.dp} 
            alt={data.name} 
            style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' , cursor: 'pointer'}} 
          />
        </div>

        {/* Text Details */}
        <div className='uData'>
          <h3 style={{ margin: 0, fontSize: '16px' }}>{data.name}</h3>
          <p className="subtitle" style={{ color: '#666', fontSize: '14px', margin: '2px 0 0 0' }}>
            {isEmp ? data.post : data.cName}
          </p>
        </div>
        <button className='absolute right-2 top-1 cursor-pointer'>
          <i class="ri-menu-line"></i>
        </button>

      </div>

      {/* Task & Status Info */}
      <div className="card-status" style={{ marginTop: '10px', borderTop: '1px solid #eee', paddingTop: '8px' }}>
        <p style={{ margin: '4px 0', fontSize: '13px' }}>
          <strong>{isEmp ? 'Task:' : 'Status info:'}</strong> {data.msg.task}
        </p>
        <p style={{ margin: '4px 0', fontSize: '13px' }}>
          <strong>Status:</strong> {data.msg.currentStatus}
        </p>
      </div>
      <div className='flex justify-evenly items-center ease-[0.3]'>
        <button className='h-8 w-22 rounded-3xl bg-[#f4f3f7] shadow-lg  cursor-pointer hover:bg-blue-300'>{isEmp ? "Assign task" : "Updates"}</button>
        <button className='h-8 w-22 rounded-3xl  cursor-pointer bg-red-400  hover:bg-red-300'>Send Msg</button>
      </div>
    </div>
  );
}

const cardStyle = {
  border: '1px solid #e0e0e0',
  borderRadius: '8px',
  padding: '16px',
  minWidth: '200px',
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px' ,
  boxShadow : '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
};