import React, { useContext } from 'react';
import InfoContext, { InfoContextProvider } from '../contexts/infoContext';
import { Link, useNavigate } from 'react-router-dom';
import './info.css';

export default function Information() {
  return (
    <InfoContextProvider>
      <InfoDashboard />
    </InfoContextProvider>
  );
}

function InfoDashboard() {
  const { data } = useContext(InfoContext);
  const navigate = useNavigate();

  const hdlEdit = () => {
    navigate('/edit');
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      {data && <Infor data={data} />}
    </div>
  );
}

function Infor({ data }) {
  return (
    <div className='profile-container bg-white border border-gray-300 rounded-[15px] p-10 shadow-lg'>
      <div className='profile-header flex items-center justify-between'>
        <h2 className='text-4xl font-bold mb-4'>ข้อมูลส่วนตัว</h2>

      </div>
      <div className='profile-content text-xl'>
        <p className='mb-4'><strong>รหัสบัตรประชาชน:</strong> {data.card_id}</p>
        <p className='mb-4'><strong>ชื่อ:</strong> {data.name}</p>
        <p className='mb-4'><strong>นามสกุล:</strong> {data.lastname}</p>
        <p className='mb-4'><strong>อีเมลล์:</strong> {data.email}</p>
      </div>
    </div>
  );
}
