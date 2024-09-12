import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Dental() {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);

  const handleClick = (path) => {
    setClicked(true);
    setTimeout(() => {
      navigate(path);
      setClicked(false);
    }, 300); // Adjust timing to match your animation duration
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10 px-4">
      <div className="container mx-auto bg-white p-6 rounded-lg shadow-lg max-w-4xl">
        <h1 className="text-3xl font-bold text-center text-teal-600 mb-4">ปัญหากลิ่นปาก</h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          กลิ่นปากเป็นปัญหาที่พบได้ในคนทั่วไป ก่อให้เกิดความรู้สึกไม่สบายใจ ขาดความมั่นใจในการเข้าสังคม 
          และส่งผลระยะยาวต่อสภาวะจิตใจได้ เป็นสาเหตุทางกายภาพ (Physiologic Halitosis) 
          เกิดจากกระบวนการย่อยสลายปกติภายในช่องปาก เช่น หลังตื่นนอนในเวลาเช้าหรือกลิ่นจากอาหารบางประเภท 
          ได้แก่ หัวหอม กระเทียม สะตอ กาแฟ เป็นต้น แต่ถ้ากลิ่นนั้นคงอยู่นานหรือเป็นอยู่อย่างเรื้อรัง 
          แสดงว่าอาจมีโรคหรือความผิดปกติเกิดขึ้น (Pathologic Halitosis)
        </p>

        <h2 className="text-2xl font-semibold text-teal-600 mb-2">สาเหตุของการเกิดกลิ่น</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          สาเหตุจากภายในช่องปาก เป็นสาเหตุหลักของการเกิดกลิ่น (ร้อยละ 90) เกิดจากการสะสมของเชื้อแบคทีเรีย 
          โดยเฉพาะแบคทีเรียแกรมลบที่ไม่ใช้ออกซิเจน ซึ่งมักพบที่ร่องเหงือกลึก คราบจุลินทรีย์บนตัวฟันหรือลิ้น 
          และการย่อยสลายสารอินทรีย์ต่างๆ ที่อยู่ภายในช่องปาก โดยเฉพาะคราบโปรตีนซึ่งก่อให้เกิดสารระเหยที่มีกลิ่นเหม็น
        </p>

        <h2 className="text-2xl font-semibold text-teal-600 mb-2">การตรวจวินิจฉัย การทดสอบกลิ่น</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          มี 2 วิธี คือ:
          <ul className="list-disc list-inside mt-2 mb-4">
            <li>การทดสอบกลิ่นด้วยตนเอง</li>
            <li>การทดสอบกลิ่นด้วยเครื่องมือ</li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold text-teal-600 mb-2">การรักษา</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          แนวทางการรักษา คือ ลดจำนวนเชื้อที่เป็นสาเหตุลง โดยการดูแลสุขอนามัยช่องปากอย่างดี 
          เน้นการทำความสะอาดทั้งฟันและลิ้น ใช้อุปกรณ์ทำความสะอาดซอกฟัน รวมทั้งกำจัดและรักษาปัญหาหรือพยาธิสภาพภายในช่องปากที่เป็นแหล่งสะสมของเชื้อ 
          เช่น ฟันผุ วัสดุอุดฟันที่มีสภาพไม่ดี โรคเหงือกอักเสบ เป็นต้น 
        </p>

        <p className="text-gray-700 font-semibold text-lg leading-relaxed mb-4"><strong>แพทย์ที่รักษา:</strong> ดร.ชัยนันท์ สมพงษ์</p>
      </div>
    </div>
  );
}
