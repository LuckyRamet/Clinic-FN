import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Care() {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);

  const handleClick = (path) => {
    setClicked(true);
    setTimeout(() => {
      navigate(path);
      setClicked(false);
    }, 300);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10 px-4">
      <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-3xl w-full">
        <h1 className="text-4xl font-bold text-teal-600 mb-8 text-center">จัดฟันดีไหม</h1>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-teal-500 mb-4">ข้อดีของการจัดฟัน</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            การจัดฟันเป็นวิธีที่ยอดเยี่ยมในการปรับปรุงสุขภาพช่องปากและฟันของคุณ การจัดฟันสามารถช่วย:
          </p>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>ปรับปรุงการเรียงตัวของฟัน เช่น ฟันห่าง ฟันซ้อน หรือฟันยื่น</li>
            <li>เพิ่มความมั่นใจในการยิ้มและพูด</li>
            <li>แก้ไขปัญหาสุขภาพช่องปาก เช่น ฟันผุ และเหงือกอักเสบ</li>
            <li>ช่วยให้ฟันบดเคี้ยวอาหารได้ดียิ่งขึ้น</li>
            <li>เสริมสร้างบุคลิกภาพให้ดูดีขึ้น</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-teal-500 mb-4">ข้อเสียของการจัดฟัน</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            ถึงแม้การจัดฟันมีข้อดีมากมาย แต่ก็มีข้อเสียที่ควรพิจารณา:
          </p>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>อาจรู้สึกเจ็บและอึดอัดในช่วงแรก</li>
            <li>ต้องใช้เวลานานในการรักษา โดยทั่วไปประมาณ 2-4 ปี</li>
            <li>มีค่าใช้จ่ายค่อนข้างสูง</li>
            <li>การแปรงฟันและการกินอาหารอาจทำได้ยาก</li>
            <li>หากไม่ดูแลดีอาจทำให้ฟันผุและมีปัญหาสุขภาพช่องปาก</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-teal-500 mb-4">การดูแลขณะจัดฟัน</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            การดูแลฟันขณะจัดฟันเป็นสิ่งสำคัญเพื่อรักษาความสะอาดและป้องกันปัญหาต่างๆ:
          </p>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>แปรงฟันให้สะอาดทุกครั้งหลังมื้ออาหาร</li>
            <li>ใช้ไหมขัดฟันและน้ำยาบ้วนปากเป็นประจำ</li>
            <li>หลีกเลี่ยงการเคี้ยวของแข็งหรือเหนียว</li>
            <li>งดทานอาหารที่ทำให้ฟันผุ เช่น ขนมหวานและน้ำอัดลม</li>
            <li>เข้าพบทันตแพทย์เป็นประจำเพื่อตรวจสุขภาพฟัน</li>
          </ul>
        </section>

        <section className="mb-2">
          <h2 className="text-3xl font-semibold text-teal-500 mb-4">จัดฟันตอนแก่ดีไหม?</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            การจัดฟันไม่จำกัดอายุ การจัดฟันสามารถทำได้ในช่วงวัยต่างๆ โดยเฉพาะ:
          </p>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>ช่วยแก้ปัญหาฟันที่อาจเกิดขึ้นในวัยผู้ใหญ่</li>
            <li>ปรับปรุงการเรียงตัวของฟันและการสบฟัน</li>
            <li>ทำให้บุคลิกภาพดีขึ้นและเพิ่มความมั่นใจ</li>
          </ul>
          <p className="text-gray-700 text-lg leading-relaxed">
            คนวัย 30-60 ปี สามารถจัดฟันได้หากมีปัญหาฟัน เช่น ฟันห่าง ฟันยื่น หรือฟันซ้อน การปรึกษาทันตแพทย์เพื่อวางแผนการรักษาจะช่วยให้ได้ผลลัพธ์ที่ดีที่สุด
          </p><br></br><br></br>

          <p className="text-gray-700 font-semibold text-lg leading-relaxed mb-4"><strong>แพทย์ที่รักษา:</strong> ดร.ชัยนันท์ สมพงษ์</p>
        </section>
      </div>
    </div>
  );
}
