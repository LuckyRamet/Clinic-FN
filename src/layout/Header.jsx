

import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth';

const guestNav = [
  { to: '/Dental', text: 'ปัญหากลิ่นปาก' },
  { to: '/tooth', text: 'ปัญหาฟันผุในเด็ก' },
  { to: '/care', text: ' จัดฟันดีไหม' },
]

const userNav = [
  { to: '/Information', text: 'ข้อมูลส่วนตัว' },

  { to: '/new', text: 'การจอง' },

  { to: '/reserve', text: 'รายการจอง' },


]

const adminNav = [


  { to: '/infoadmin', text: 'ข้อมูลส่วนตัว' },

  { to: '/reserve', text: 'รายการจอง' },


]

export default function Header() {
  const { user, logout } = useAuth()
  const finalNav = user?.id ? ["ADMIN", "DOCTOR"].includes(user?.role) ? adminNav : userNav : guestNav

  const navigate = useNavigate()
  const hdlLogout = () => {
    logout()
    navigate('/')
  }

  return (

    <div className="container mx-auto p-4">
      <div className="navbar bg-white shadow-lg rounded-lg">
        <div className="flex-1 flex items-center">
          <Link to="/" className="mr-4">
            <img
              src="../1.7.jpg"
              className="w-20 h-20 rounded-full border-2 border-pink-500"
              alt="Logo"
            />
          </Link>
          <a className="btn btn-ghost text-xl text-gray-800">
            ยินดีต้อนรับ คุณ {user?.name} {user?.lastname}
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {finalNav.map((el) => (
              <li key={el.to}>
                <Link to={el.to} className="text-gray-800 hover:text-pink-500">
                  {el.text}
                </Link>
              </li>
            ))}
            {user?.id && (
              <li>
                <Link to="#" onClick={hdlLogout} className="text-gray-800 hover:text-pink-500">
                  ออกจากระบบ
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>

  );
}
