import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ReservedContext, {
    ReservedContextProvider,
} from "../contexts/ReserveContext";
import'./Rese.css';


export default function Show() {
    return (
        <ReservedContextProvider>
            <ReserveDashboard />
        </ReservedContextProvider>
    );
}

function ReserveDashboard() {
    const { adminData } = useContext(ReservedContext);

    // console.log(typeof data);

    return (
        <div>
            {adminData && adminData.map(el => (
                <ReserveItem key={el.id} item={el}/>
            ))}
        </div>
    )
}

function ReserveItem({item}) {

  const { updateStatusReserved } = useContext(ReservedContext);

  const hdlDelete = (e) => {
    e.preventDefault()
    updateStatusReserved(item.id)
  }

    return (
      <div className="p-4">
  <div className="bg-pink-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <table className='border-collapse w-full'>
      <tbody>
        <tr className='bg-pink-300'>
          <th className='border p-2'>User ID</th>
          <td className='border p-2'>{item.name}</td>
        </tr>
        <tr>
          <th className='border p-2'>Datetime</th>
          <td>{new Date(item.datetime).toUTCString().split("GMT")}</td>
        </tr>
        <tr>
          <th className='border p-2'>Phone</th>
          <td className='border p-2'>{item.phone}</td>
        </tr>
        <tr>
          <th className='border p-2'>Disease</th>
          <td className='border p-2'>{item.disease}</td>
        </tr>
      </tbody>
    </table>
   
  </div>
</div>
    )
}