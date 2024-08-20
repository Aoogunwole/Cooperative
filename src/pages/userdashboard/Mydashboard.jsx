import React from 'react'
import { Button } from '../../components/button'
import Nav from '../../components/Nav'
import { LuBarChart4, LuTable } from "react-icons/lu";
import { IoBagHandleSharp } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { RxClock } from "react-icons/rx";
import { MdOutlineArrowOutward } from "react-icons/md";
import Table from './Table';




const Mydashboard = () => {

  const Menus = [
    { icon: <LuBarChart4 />, title: "Building Savings", ammount: "$53,00989", status: "12% increase from last month" },
    { icon: <IoBagHandleSharp />, title: "Share Savings", ammount: "$53,00989", status: "12% increase from last month" },
    { icon: <AiOutlineUser />, title: "Building Savings", ammount: "$53,00989", status: "12% increase from last month" },
    { icon: <RxClock />, title: "Contact Admin", ammount: "$53,00989", status: "12% increase from last month" },
  ];



  return (
    <div>
        <Nav />
      <div className="px-6">
        <div className="flex justify-between">
          <h2 className="font-mont text-[22px]">Overview</h2>
          <Button type="dark" title="Fund Account" _style=" px-5 py-2 "/>
        </div>

        <div className="w-[100%] mt-2 sm:mt-8 grid grid-cols-4 gap-4">
          {Menus.map((menu, index) => (
            <div key={index} className="bg-light p-4 rounded-lg">
              <div className={`icon-bg-${index} w-fit p-2 rounded-full text-white`}>{menu.icon}</div>
              <p className="text-[14px] pt-3">{menu.title}</p>
              <h2 className="text-[28px] font-mont font-600">{menu.ammount}</h2>
              <div className="flex">
                <div className="text-green"> <MdOutlineArrowOutward /> </div>
                <p className="text-[10px]">{menu.status}</p>
              </div>
            </div>
          ))}
        </div>




        <div className="mt-8">
        <div className="flex justify-between ">
          <h2 className="font-mont text-[28px] font-semibold">Transactions</h2>
          <div className="flex gap-3">
            <Button type="light" title="Filter" _style=" px-3 py-1 "/>
            <Button type="dark" title="Export CSV" _style=" px-3 py-1 "/>
          </div>
        </div>
        </div>

            <Table />
      </div>

      
    </div>
  )
}

export default Mydashboard
