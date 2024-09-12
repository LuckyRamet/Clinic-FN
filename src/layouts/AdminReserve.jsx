import { useContext, useState } from "react";
import ReservedContext, { ReservedContextProvider } from "../contexts/ReserveContext";
import InfoContext from "../contexts/infoContext";
import Swal from 'sweetalert2'
import './AdminReserve.css';
export default function AdminReserved() {
    return (
        <ReservedContextProvider>
            <ReserveDashboard />
        </ReservedContextProvider>
    );
}

function ReserveDashboard() {
    const { adminData } = useContext(ReservedContext);
    const { member } = useContext(InfoContext);

    return (
        <div className="p-4 flex flex-col space-y-4">
            {/* Display count of items */}
            <div className="text-lg font-semibold mb-4 text-center">
                ทั้งหมด : {adminData ? adminData.length : 0} การจอง
            </div>
            {adminData && adminData.map(el => (
                <ReserveItem member={member} key={el.id} item={el} />
            ))}
        </div>
    )
}

function ReserveItem({ item, member }) {
    const { updateStatusReserved } = useContext(ReservedContext);
    const [status, setStatus] = useState('')

    const hdlSubmit = (e, statusReserve) => {
        e.preventDefault();
        Swal.fire({
            title: statusReserve === 'APPROVED' ? "ยืนยันการจอง" : "ยกเลิกการจอง",
            text: "คุณจะไม่สามารถแก้ไขได้",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#ec4899",
            confirmButtonText: "ยืนยัน",   
            cancelButtonText: "ยกเลิก",
        }).then((result) => {
            if (result.isConfirmed) {
                updateStatusReserved(item.id, statusReserve);
                Swal.fire({
                    title: statusReserve === 'APPROVED' ? "ยืนยันการจองสำเร็จ!" : "ยกเลิกการจองสำเร็จ",
                    icon: "success"
                }).then(() => {
                })
            }
        });
    }

    const user = member.find(el => el.id === item.user_id);
    const { name, lastname } = user || { name: "", lastname: "" };

    return (
        <div className="p-4">
            <div className="bg-white shadow-lg rounded-[15px] p-6 mb-4 w-full lg:w-3/4 mx-auto">
                <div className="flex items-center mb-4">
                    <div className="text-[20px] font-bold mr-4">ชื่อ-นามสกุล</div>
                    <div className="text-[18px] text-gray-700 font-medium">{name} {lastname}</div>
                </div>
                <div className="flex items-center mb-4">
                    <div className="text-[20px] font-bold mr-4">วันเวลา</div>
                    <div className="text-[18px] text-gray-700 font-medium">{new Date(item.datetime).toUTCString().split("GMT")[0]}</div>
                </div>
                <div className="flex items-center mb-4">
                    <div className="text-[20px] font-bold mr-4">เบอร์โทร</div>
                    <div className="text-[18px] text-gray-700 font-medium">{item.phone}</div>
                </div>
                <div className="flex items-center mb-4">
                    <div className="text-[20px] font-bold mr-4">อาการเบื้องต้น</div>
                    <div className="text-[18px] text-gray-700 font-medium">{item.disease}</div>
                </div>
                <div className="flex items-center mb-4">
                    <div className="text-[20px] font-bold mr-4">สถานะ</div>
                    <div className="text-[18px] text-gray-700 font-medium">{item.status === 'PENDING' ? 'รอดำเนินการ' : item.status === 'APPROVED' ? 'ตรวจสอบสำเร็จ' : item.status === 'RESERVED' ? 'จองสำเร็จ' : 'ถูกยกเลิก'}</div>
                </div>

                <div className="flex items-center justify-end space-x-4">

                    {["PENDING"].includes(item.status) && (
                        <>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md" onClick={(e) => hdlSubmit(e, 'APPROVED')}>ยืนยัน</button>
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md" onClick={(e) => hdlSubmit(e, 'CANCELED')}>ยกเลิก</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
