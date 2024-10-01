import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReservedContext, { ReservedContextProvider } from "../contexts/ReserveContext";
import AuthContext, { AuthContextProvider } from "../contexts/AuthContext";
import { motion } from "framer-motion";
import Swal from 'sweetalert2'

export default function NewTodoForm() {
  return (
    <AuthContextProvider>
      <ReservedContextProvider>
        <AddFormBooking />
      </ReservedContextProvider>
    </AuthContextProvider>
  );
}

function AddFormBooking() {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl animate-pulse">Loading...</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="animate-fade-in"
    >
      {user && <FormNew user={user} />}
    </motion.div>
  );
}

function FormNew({ user }) {
  const { createBooking, datas } = useContext(ReservedContext);
  console.log (datas)
  const [time, setTime] = useState(null);
  const [input, setInput] = useState({
    datetime: new Date().toLocaleString("th-TH", {
      timeZone: "Asia/Bangkok",
      hour12: false,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    }),
    phone: '',
    disease: '',
    user_id: user.id
  });

  const hdlChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const hdlSubmit = (e) => {
    e.preventDefault();
    
    if (!input.datetime || !time || !input.phone || !input.disease) {
      Swal.fire({
        icon: "error",
        title: "ข้อมูลไม่ครบ",
        text: "กรุณากรอกข้อมูลให้ครบ!",
      });
      return;
    }

    const timedate = `${input.datetime}T${time}.000Z`;
    createBooking({ ...input, datetime: timedate });
    location.replace('/reserve');
  };

  const hdlChangeTime = (e) => {
    setTime(e.target.value);
  };

  const findTime = datas?.map(el => el.datetime.split('T')[1].slice(0, 8));
  const findDay = datas?.map(el => el.datetime.split('T')[0]);

  return (
    <motion.form
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col min-w-[70px] border rounded-[15px] w-2/4 mx-auto p-4 gap-4 bg-white mt-4 shadow-lg"
      onSubmit={hdlSubmit}
    >
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text text-gray-700">วันเวลา</span>
        </div>
      </label>
      <div className="flex gap-2 w-full">
        <input
          type="date"
          name="datetime"
          value={input.datetime}
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
            const disabled = findDay?.includes(input.datetime.split('T')[0]) && findTime?.includes(time);
            return (
              <option key={time} value={time} disabled={disabled}>
                {time.slice(0, 5)}
              </option>
            );
          })}
        </select>
      </div>
      <div className="label">
        <span className="label-text text-gray-700">เบอร์โทร</span>
      </div>
      <input
        type="text"
        placeholder="กรุณากรอกเบอร์โทรของคุณ"
        className="input input-bordered w-full bg-gray-200 p-2 rounded-[12px] border border-gray-300 focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-transparent transition-all duration-300 ease-in-out"
        name="phone"
        value={input.phone}
        onChange={hdlChange}
      />
      <div className="label">
        <span className="label-text text-gray-700">อาการเบื้องต้น</span>
      </div>
      <input
        type="text"
        placeholder="กรุณากรอกอาการเบื้องต้น"
        className="input input-bordered w-full bg-gray-200 p-2 rounded-[12px] border border-gray-300 focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-transparent transition-all duration-300 ease-in-out"
        name="disease"
        value={input.disease}
        onChange={hdlChange}
      />
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="btn btn-outline btn-pink-500 text-pink-500 border-pink-500 hover:bg-pink-500 hover:text-white hover:border-pink-500 transition duration-300 ease-in-out shadow-md rounded-full"
      >
        จองเลย
      </motion.button>
    </motion.form>
  );
}
