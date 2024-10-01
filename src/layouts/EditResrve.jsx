import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import AuthContext from '../contexts/AuthContext';
import ReservedContext from '../contexts/ReserveContext';
import axios from 'axios';

export default function Edit() {
    const id = window.location.pathname.split('/')[2];
    const [reserved, setReserved] = useState(null);

    useEffect(() => {
        const showBooking = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) return;

                const rs = await axios.get(`https://clinic-bn-oqdbt1mev-abckuns-projects.vercel.app/booking/${id}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });

                setReserved(rs.data);
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: error.message
                });
            }
        };

        showBooking();
    }, [id]);

    return (
        <div>
            {reserved && <FormEdit reserved={reserved} />}
        </div>
    );
}

function FormEdit({ reserved }) {
    const { updateBooking, data, doctorUpdateStatusReserved } = useContext(ReservedContext);
    const [time, setTime] = useState(null);
    const [isUpdate, setIsUpdate] = useState(false);
    const [update, setUpdate] = useState({
        datetime: new Date().toLocaleString("th-TH", {
            timeZone: "Asia/Bangkok",
            hour12: false,
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit"
        }),
        phone: reserved.phone,
        disease: reserved.disease
    });

    const hdlClick = (e) => {
        e.preventDefault();
        setIsUpdate(!isUpdate);
    };

    const hdlCancel = (e) => {
        e.preventDefault();
        setIsUpdate(false);
    };

    const hdlChangeTime = (e) => {
        setTime(e.target.value);
    };

    const hdlChange = (e) => {
        setUpdate(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const hdlSubmit = (e) => {
        e.preventDefault();

        if (!update.datetime || !time) {
            Swal.fire({
                icon: "error",
                title: "ข้อมูลไม่ครบ",
                text: "กรุณากรอกข้อมูลให้ครบ!",
            });
            return;
        }

        const timedate = `${update.datetime.split(' ')[0]}T${time}.000Z`;
        updateBooking(reserved.id, { ...update, datetime: timedate });
        doctorUpdateStatusReserved(reserved.id, { status: 'PENDING', notes: null });
        setIsUpdate(false);
    };

    const findTime = data?.map(el => el.datetime.split('T')[1].slice(0, 8));
    const findDay = data?.map(el => el.datetime.split('T')[0]);

    return (
        <>
            {isUpdate ? (
                <div className='max-w-md mx-auto mt-8 bg-pink-100 p-8 rounded shadow-lg'>
                    <h2 className='text-2xl font-bold mb-4 text-pink-500'>เเก้ไขวันเวลา</h2>
                    <form onSubmit={hdlSubmit}>
                        {reserved.status === 'CANCELED' && (
                            <div className="flex gap-2 w-full">
                                <input
                                    type="date"
                                    name="datetime"
                                    value={update.datetime.split(' ')[0]}
                                    onChange={hdlChange}
                                    min={new Date().toISOString().split('T')[0]}
                                    className="w-full bg-gray-200 p-2 rounded-[12px] border border-gray-300 focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-transparent transition-all duration-300 ease-in-out"
                                />
                                <select
                                    onChange={hdlChangeTime}
                                    className="w-full bg-gray-200 p-2 rounded-[12px] border border-gray-300 focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-transparent transition-all duration-300 ease-in-out"
                                >
                                    <option hidden>เลือกเวลา</option>
                                    {['09:30:00', '10:30:00', '13:00:00', '14:00:00', '15:00:00', '17:00:00'].map(time => {
                                        const disabled = findDay?.includes(update.datetime.split(' ')[0]) && findTime?.includes(time);
                                        return (
                                            <option key={time} value={time} disabled={disabled}>
                                                {time.slice(0, 5)}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                        )}
                        <br />
                        <button
                            type='submit'
                            className='bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none mr-2'
                        >
                            {reserved.status === 'CANCELED' ? 'ตกลง' : 'Save'}
                        </button>
                        <button
                            onClick={hdlCancel}
                            className='bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none'
                        >
                            ยกเลิก
                        </button>
                    </form>
                </div>
            ) : (
                <div className='max-w-md mx-auto mt-8 bg-pink-100 p-8 rounded shadow-lg'>
                    <h2 className='text-2xl font-bold mb-4 text-pink-500'>เเก้ไขวันเวลา</h2>
                    <form>
                        <div className="flex gap-2 w-full">
                            <input
                                type="date"
                                name="datetime"
                                value={update.datetime.split(' ')[0]}
                                readOnly
                                className="w-full bg-gray-200 p-2 rounded-[12px] border border-gray-300 focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-transparent transition-all duration-300 ease-in-out"
                            />
                            <select
                                disabled
                                className="w-full bg-gray-200 p-2 rounded-[12px] border border-gray-300 focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-transparent transition-all duration-300 ease-in-out"
                            >
                                <option hidden>เลือกเวลา</option>
                                {['09:30:00', '10:30:00', '13:00:00', '14:00:00', '15:00:00', '17:00:00'].map(time => {
                                    const disabled = findDay?.includes(update.datetime.split(' ')[0]) && findTime?.includes(time);
                                    return (
                                        <option key={time} value={time} disabled={disabled}>
                                            {time.slice(0, 5)}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <br />
                        <button
                            onClick={hdlClick}
                            className='bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none'
                        >
                            เเก้ไข
                        </button>
                    </form>
                </div>
            )}
        </>
    );
}
