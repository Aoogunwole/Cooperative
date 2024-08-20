import React from 'react'
import Nav from '../../components/Nav'

const ContactAdmin = () => {

  const Admins = [
    { img: "../src/assets/admin.svg", name: "Mr. Adedokun Wale", position: "Chairman", phone:"123456", whatsapp:"12345" },
    { img: "../src/assets/admin.svg", name: "Mr. Adedokun Wale", position: "Chairman", phone:"123456", whatsapp:"12345" },
    { img: "../src/assets/admin.svg", name: "Mr. Adedokun Wale", position: "Chairman", phone:"123456", whatsapp:"12345" },
    { img: "../src/assets/admin.svg", name: "Mr. Adedokun Wale", position: "Chairman", phone:"123456", whatsapp:"12345" },
    { img: "../src/assets/admin.svg", name: "Mr. Adedokun Wale", position: "Chairman", phone:"123456", whatsapp:"12345" },
    { img: "../src/assets/admin.svg", name: "Mr. Adedokun Wale", position: "Chairman", phone:"123456", whatsapp:"12345" },
    { img: "../src/assets/admin.svg", name: "Mr. Adedokun Wale", position: "Chairman", phone:"123456", whatsapp:"12345" },
    { img: "../src/assets/admin.svg", name: "Mr. Adedokun Wale", position: "Chairman", phone:"123456", whatsapp:"12345" },
    
  ];


  return (
    <div>
      <Nav />
      <div className="px-6">
        <div >
          <h2 className="font-mont text-[22px]">Contact Admin</h2>
        </div>


        <div className="mt-2 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Admins.map((admin, index) => (
            <div className="border rounded-xl border-[#F9E6DB] p-3">
              <div className="flex items-center justify-center">
              <img src={admin.img} alt="" />
              </div>
            <h1 className="text-[25px] text-[#475367] text-orange text-center">{admin.name}</h1>
            <p className='text-[21px] text-center text-[#344054]'>{admin.position}</p>

            
            <div className="flex flex-col justify-between text-[16px] text-[#344054]">
              <p>Phone No: {admin.phone}</p>
              <p>Whatsapp: {admin.whatsapp}</p>
            </div>
            
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ContactAdmin
