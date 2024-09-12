import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReservedContext, { ReservedContextProvider } from "../contexts/ReserveContext";
import InfoContext, { InfoContextProvider } from "../contexts/infoContext";
import AuthContext, { AuthContextProvider } from "../contexts/AuthContext";
// import { Scheduler } from "@aldabil/react-scheduler";
export default function Newtime() {
  return (
    <AuthContextProvider>
      <ReservedContextProvider>
        <AddFormBooking />
      </ReservedContextProvider>
    </AuthContextProvider>
  )
}

// const navigate = useNavigate();
// const linkToReservatiolist = () => {
//   navigate("/reserve");
// };

function AddFormBooking() {
  const { user, loading } = useContext(AuthContext)

  if (loading) {
    return (
      <div>
        <p> loading....</p>
      </div>
    )
  }

  return (
    <div>
      {user && <FormNew user={user} />}
    </div>
  )
}

function FormNew({ user }) {
  const { createBooking } = useContext(ReservedContext)

  // console.log(user?.id)

  const [input, setInput] = useState({
    datetime: '',

  })


  const hdlChange = (e) => {
    setInput((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };

  const hdlSubmit = (e) => {
    e.preventDefault();
    // console.log(input.user_id);
    createBooking(input)
  };

  return (
    <form className="flex flex-col min-w-[70px] border rounded w-2/4 mx-auto p-2 gap-2 bg-pink-100 mt-4 " onSubmit={hdlSubmit}>
      <label className="form-control w-full max-w-[140px]">
        <div className="label">
          <span className="label-text text-pink-800">Due Date</span>
        </div>
        <input type="datetime-local" name="datetime" value={input.datetime} onChange={hdlChange} className="bg-pink-200" />
      </label>
      <div></div>

      <button
        type="submit"
        className="btn btn-outline btn-pink text-pink-800 border-pink-500 hover:bg-pink-500 hover:text-white hover:border-pink-500 transition duration-300 ease-in-out shadow-md rounded-full"
      >
        Add New
      </button>
    </form>





  );
}
