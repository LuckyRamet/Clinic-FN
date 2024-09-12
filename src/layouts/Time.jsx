import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReservedContext, {
  ReservedContextProvider,
} from "../contexts/ReserveContext";
import './Rese.css';
// import { Scheduler } from "@aldabil/react-scheduler";

export default function Time() {
  return (
    <ReservedContextProvider>
      <ReserveDashboard />
    </ReservedContextProvider>
  );
}

function ReserveDashboard() {
  const { data } = useContext(ReservedContext);


  return (
    <div>
      {data && data.map(el => (
        <ReserveItem key={el.id} item={el} />
      ))}
    </div>
  )
}

function ReserveItem({ item }) {

  const navigate = useNavigate()

  const hdlClick = () => {
    navigate('/editresrve/' + item.id)
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <table className='reserve-table'>
        <tbody>
          <tr>
          <th>Datetime</th>
            <td>{item.datetime}</td>
          </tr>
          <tr>
            
          </tr>
          <tr>
            
          </tr>
          <tr>
            
          </tr>
          
        </tbody>
      </table>
      
      <button
        onClick={hdlClick}
        style={{
          backgroundColor: '#FFC0CB', // Pink color
          color: '#fff', // White text
          padding: '8px 12px', // Adjust padding as needed
          border: 'none', // Remove border
          borderRadius: '5px', // Add rounded corners
          cursor: 'pointer', // Change cursor on hover
        }}
      // onClick={() => handleEdit(item.id)}
      >
        Edit

      </button>
    </div>



  )
}