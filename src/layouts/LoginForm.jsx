import axios from 'axios';
import { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function LoginForm() {
  const { setUser } = useAuth();
  const [input, setInput] = useState({
    card_id: '',
    password: ''
  });

  const navigate = useNavigate();

  const hdlChange = e => {
    setInput(prv => ({ ...prv, [e.target.name]: e.target.value }));
  };

  const hdlSubmit = async e => {
    try {
      e.preventDefault();

      // validation
      const rs = await axios.post('https://clinic-bn-oqdbt1mev-abckuns-projects.vercel.app/auth/login', input);
      localStorage.setItem('token', rs.data.token);
      const rs1 = await axios.get('https://clinic-bn-oqdbt1mev-abckuns-projects.vercel.app/auth/me', {
        headers: { Authorization: `Bearer ${rs.data.token}` }
      });
      navigate('/home');
      setUser(rs1.data);
    } catch (err) {
      alert(err.response.data.error);
    }
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
        className="max-w-md w-full bg-white p-8 rounded-2xl shadow -mt-20"
      >
        <div className="flex justify-center mb-8">
          <motion.img
            src="1.7.jpg"
            className="w-20 h-20 rounded-full border-2 border-pink-500"
            alt="Logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>
        <h2 className="text-gray-800 text-center text-2xl font-bold">ลงชื่อเข้าใช้</h2>
        <form className="mt-8 space-y-4" onSubmit={hdlSubmit}>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">รหัสบัตรประชาชน</label>
            <motion.input
              type="text"
              name="card_id"
              value={input.card_id}
              onChange={hdlChange}
              className="w-full text-gray-800 text-sm bg-gray-200 border border-gray-300 px-4 py-3 rounded-[12px] outline-blue-600"
              placeholder="กรุณากรอกรหัสบัตรประชาชน"
              required
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
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
              placeholder="กรุณากรอกรหัสผ่าน"
              required
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
          </div>

          <div className="mt-8">
            <motion.button
              type="submit"
              className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-pink-600 hover:bg-pink-700 focus:outline-none"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              เข้าสู่ระบบ
            </motion.button>
          </div>
          <p className="text-gray-800 text-sm mt-8 text-center">
            ยังไม่มีบัญชีใช่ไหม?{' '}
            <Link to="/register" className="text-blue-600 hover:underline ml-1 font-semibold">
              ลงทะเบียน
            </Link>
          </p>
        </form>
      </motion.div>
    </motion.div>
  );
}
