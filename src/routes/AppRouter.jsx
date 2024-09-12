import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import LoginForm from '../layouts/LoginForm'
import RegisterForm from '../layouts/RegisterForm'
import useAuth from '../hooks/useAuth'
import Header from '../layout/Header'
import UserHome from '../layout/UserHome'
import NewTodoForm from '../layout/NewTodoForm'
import HOME from '../layouts/Home'
import Information from '../layouts/Information'
import Reserved from '../layouts/Reserve'
import AdminReserved from '../layouts/AdminReserve'
import Edit from '../layouts/Edit'
import EditResrve from '../layouts/EditResrve'
import Newtime from '../layout/Newtime'
import Time from '../layouts/Time'
import Show from '../layouts/Show'
import AdminHome from '../layouts/home1'
import Infoadmin from '../layouts/Informationadmin'
import DoctorReserved from '../layouts/DoctorReserve'
import GuestHomepage from '../layouts/Home2'
import DoctorHome from'../layouts/homedoctor'
import Dental from'../layouts/dental'
import Tooth from'../layouts/tooth'
import Care from'../layouts/care'
// import Reservatiolist from '../layouts/Reservationlist'


const guestRouter = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Header />
      <Outlet />
    </>,
    children: [
      { index: true, element: <GuestHomepage /> },
      { path: '/register', element: <RegisterForm /> },
      { path: '/login', element: <LoginForm /> },
      { path: '/Home', element: <GuestHomepage /> },
      { path: '/Information', element: <Information /> },
      { path: '/reserve', element: <Reserved /> },
      { path: '/dental', element: <Dental/> },
      { path: '/tooth', element: <Tooth/> },
      { path: '/care', element: <Care/> },
      // { path: '/Reservation list', element: <Reservatiolist />},

    ]
  }
])

const userRouter = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Header />
      <Outlet />
    </>,
    children: [
      { index: true, element: <HOME /> },
      { path: '/new/*', element: <NewTodoForm /> },
      { path: '/login', element: <LoginForm /> },
      { path: '/home', element: <HOME /> },
      { path: '/Information', element: <Information /> },
      { path: '/reserve', element: <Reserved /> },
      { path: '/edit', element: <Edit /> },
      { path: '/editresrve/*', element: <EditResrve /> },
      { path: '/newtime', element: <Newtime /> },
      { path: '/time', element: <Time /> },
      { path: '/show', element: <Show /> },
      
    ]
  }
])

const AdminRouter = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Header />
      <Outlet />
    </>,
    children: [
      { index: true, element: <AdminHome /> },
      { path: '/home', element: <AdminHome /> },
      { path: '/new/*', element: <NewTodoForm /> },
      { path: '/login', element: <LoginForm /> },
      { path: '/Information', element: <Information /> },
      { path: '/reserve', element: <AdminReserved /> },
      { path: '/newtime', element: <Newtime /> },
      { path: '/time', element: <Time /> },
      { path: '/show', element: <Show /> },
      { path: '/infoadmin', element: <Infoadmin /> },
      
    ]
  }
])

const DoctorRouter = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Header />
      <Outlet />
    </>,
    children: [
      { index: true, element: <DoctorHome /> },
      { path: '/home', element: <DoctorHome /> },
      { path: '/new/*', element: <NewTodoForm /> },
      { path: '/login', element: <LoginForm /> },
      { path: '/Information', element: <Information /> },
      { path: '/reserve', element: <DoctorReserved /> },
      { path: '/newtime', element: <Newtime /> },
      { path: '/time', element: <Time /> },
      { path: '/show', element: <Show /> },
      { path: '/infoadmin', element: <Infoadmin /> },
      
    ]
  }
])

export default function AppRouter() {
  const { user } = useAuth()
  // const finalRouter = user?.id ? userRouter : guestRouter
  const finalRouter = !user?.id
    ? guestRouter
    : user.role === 'ADMIN'
      ? AdminRouter
      : user.role === 'DOCTOR'
        ? DoctorRouter
        : userRouter;
  return (
    <RouterProvider router={finalRouter} />
  )
}
