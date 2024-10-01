import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const ReservedContext = createContext()

function ReservedContextProvider(props) {
  const [datas, setDatas] = useState(null)
  const [data, setData] = useState(null)
  const [adminData, setAdminData] = useState(null)
  const [doctorData, setDoctorData] = useState(null)
  const [trigger, setTrigger] = useState(false)

  useEffect(() => {
    const showBooking = async () => {
      try {
        let token = localStorage.getItem('token')
        if (!token) { return }
        const rs = await axios.get("https://clinic-bn.vercel.app/booking/showmew", {
          headers: { Authorization: `Bearer ${token}` }
        })
        // console.log(rs.data)
        setDatas(rs.data)

      } catch (error) {
        alert(error);
      }
    };

    showBooking();
  }, [trigger])
  useEffect(() => {
    const showBooking = async () => {
      try {
        let token = localStorage.getItem('token')
        if (!token) { return }
        const rs = await axios.get("https://clinic-bn.vercel.app/booking/show", {
          headers: { Authorization: `Bearer ${token}` }
        })
        // console.log(rs.data)
        setData(rs.data)

      } catch (error) {
        alert(error);
      }
    };

    showBooking();
  }, [trigger])
  useEffect(() => {
    const showBooking = async () => {
      try {
        let token = localStorage.getItem('token')
        if (!token) { return }
        const rs = await axios.get("https://clinic-bn.vercel.app/booking/admin/show", {
          headers: { Authorization: `Bearer ${token}` }
        })
        const doctorResponse = await axios.get("https://clinic-bn.vercel.app/booking/doctor/show", {
          headers: { Authorization: `Bearer ${token}` }
        })
        // console.log(rs.data)
        setAdminData(rs.data)
        setDoctorData(doctorResponse.data)

      } catch (error) {
        alert(error);
      }
    };

    showBooking();
  }, [trigger])

  const createBooking = async (input) => {
    try {
      // console.log(input);
      const rs = await axios.post(`https://clinic-bn.vercel.app/booking/creacte`, input)
      if (rs.status === 200) {
        // location.replace('/reserve')

      }

    } catch (err) {
      alert(err.message)
    }
  }

  const updateStatusReserved = async (bookingId, status) => {
    try {
      await axios.patch(`https://clinic-bn.vercel.app/booking/update/${bookingId}`, { status });
      setTrigger(prv => !prv)
      // if (re.status === 200) {
      // }

    } catch (error) {
      alert(error.message)

    }
  }
  const doctorUpdateStatusReserved = async (bookingId, status) => {
    try {
      await axios.patch(`https://clinic-bn.vercel.app/booking/update/${bookingId}`, status);
      setTrigger(prv => !prv)
    } catch (error) {
      alert(error.message)
    }
  }
  const updateUserSeenStatus = async (bookingId, seen) => {
    try {
      await axios.patch(`https://clinic-bn.vercel.app/booking/update/${bookingId}`, { seen });
      setTrigger(prv => !prv)
      // if (re.status === 200) {
      // }

    } catch (error) {
      alert(error.message)

    }
  }

  const updateBooking = async (bookingId, data) => {
    try {
      console.log(data)
      const token = localStorage.getItem('token')
      const rs = await axios.patch(`https://clinic-bn.vercel.app/booking/patch/${bookingId}`, data, {
        headers: { Authorization: `Bearer ${token}` }
      })
      if (rs.status === 200) {
        alert('Update Successfully')
        location.replace('/reserve')
      }


    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <ReservedContext.Provider value={{ datas,data, createBooking, adminData, doctorData, updateStatusReserved, updateBooking, updateUserSeenStatus, doctorUpdateStatusReserved }}>
      {props.children}
    </ReservedContext.Provider>
  );
}


export default ReservedContext;
export { ReservedContextProvider };