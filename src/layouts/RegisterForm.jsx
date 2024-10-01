import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
export default function RegisterForm() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    card_id: '',
    name: '',
    lastname: '',
    email: '',
    password: '',
    
  });

  const hdlChange = e => {
    setInput(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const hdlSubmit = async e => {
    try {
      e.preventDefault();
      const rs = await axios.post('https://clinic-bn-oqdbt1mev-abckuns-projects.vercel.app/auth/register', input);
      if (rs.status === 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Register Successful",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/login');
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Register Failed!",
        text: `${err.response.data.error}`,
      });
    }
  };

  const handleReset = () => {
    setInput({
      card_id: '',
      name: '',
      lastname: '',
      email: '',
      password: '',
      
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 font-[sans-serif] min-h-screen flex items-center justify-center px-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white p-8 rounded-2xl shadow mt-16"
      >
        <div className="flex justify-center mb-8">
          <motion.img
            src="1.7.jpg"
            className="w-20 h-20 rounded-full border-2 border-pink-500"
            alt="1.7"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>
        <h2 className="text-gray-800 text-center text-2xl font-bold">ลงทะเบียน</h2>
        <form className="mt-8 space-y-4" onSubmit={hdlSubmit}>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">รหัสบัตรประชาชน</label>
            <motion.input
              type="text"
              name="card_id"
              value={input.card_id}
              onChange={hdlChange}
              className="w-full text-gray-800 text-sm bg-gray-200 border border-gray-300 px-4 py-3 rounded-[12px] outline-blue-600"
              placeholder="กรุณากรอกรหัสบัตรประชน"
              required
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">ชื่อจริง</label>
            <motion.input
              type="text"
              name="name"
              value={input.name}
              onChange={hdlChange}
              className="w-full text-gray-800 text-sm bg-gray-200 border border-gray-300 px-4 py-3 rounded-[12px] outline-blue-600"
              placeholder="กรุณากรอกชื่อของคุณ"
              required
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">นามสกุล</label>
            <motion.input
              type="text"
              name="lastname"
              value={input.lastname}
              onChange={hdlChange}
              className="w-full text-gray-800 text-sm bg-gray-200 border border-gray-300 px-4 py-3 rounded-[12px] outline-blue-600"
              placeholder="กรุณากรอกชื่อนามสกุลของคุณ"
              required
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">อีเมลล์</label>
            <motion.input
              type="email"
              name="email"
              value={input.email}
              onChange={hdlChange}
              className="w-full text-gray-800 text-sm bg-gray-200 border border-gray-300 px-4 py-3 rounded-[12px] outline-blue-600"
              placeholder="กรุณากรอกอีเมล์ของคุณ"
              required
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            />
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">รหัสผ่าน</label>
            <motion.input
              type="password"
              name="password"
              value={input.password}
              onChange={hdlChange}
              className="w-full text-gray-800 text-sm bg-gray-200 border border-gray-300 px-4 py-3 rounded-[12px] outline-blue-600"
              placeholder="กรุณากรอกรหัสผ่านของคุณ"
              required
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            />
          </div>
          
          <div className="mt-8 flex justify-between">
            <motion.button
              type="submit"
              className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-pink-600 hover:bg-pink-700 focus:outline-none"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              ลงทะเบียน
            </motion.button>
            <motion.button
              type="button"
              onClick={handleReset}
              className="ml-4 w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-gray-400 hover:bg-gray-500 focus:outline-none"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              ยกเลิก
            </motion.button>
          </div>
        </form>
        <p className="text-gray-800 text-sm mt-8 text-center">
          มีบัญชีอยู่เเล้วใช่ไหม?{' '}
          <a href="/login" className="text-blue-600 hover:underline ml-1 font-semibold">
            ลงชื่อเข้าใช้
          </a>
        </p>
      </motion.div>
    </motion.div>
  );
}
