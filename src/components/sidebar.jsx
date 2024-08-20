import { useState } from "react";
import { PiLessThan } from "react-icons/pi";
import { GrAppsRounded } from "react-icons/gr";
import { IoBagHandleSharp } from "react-icons/io5";
import { TbGitBranch } from "react-icons/tb";
import { MdOutlineContactPhone } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { PiGreaterThan } from "react-icons/pi";
import { Link } from "react-router-dom";



const Sidebar = ({ open, setOpen }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const Menus = [
    { title: "Dashboard", src: <GrAppsRounded />, link: "/mydashboard"},
    { title: "Loan", src: <IoBagHandleSharp />, link: "/mydashboard/loan" },
    { title: "Branch Location", src: <TbGitBranch />, link: "/mydashboard/branches" },
    { title: "Contact Admin", src: <MdOutlineContactPhone />, link:"/mydashboard/contact-admin" },
    { title: "Profile", src: <IoSettingsOutline />, link:"/mydashboard/myprofile" },
  ];

  return (
    <div className="h-full p-5 border-r pt-8 bg-black">
      <span
        className={`absolute cursor-pointer -right-3 bg-white text-black top-9 w-7 h-7 border-dark-purple
         border-2 rounded-full flex items-center justify-center`}
        onClick={() => setOpen(!open)}
      >
        {open ? <PiLessThan /> : <PiGreaterThan /> }
      </span>

      <div className="flex gap-x-2 items-center">
        <img
          src="./src/assets/promage.svg"
          className={`cursor-pointer duration-500 ${
            open && "rotate-[360deg]"
          }`}
        />
        <h1
          className={`text-white origin-left font-medium text-xl duration-200 ${
            !open && "scale-0"
          }`}
        >
          Promage
        </h1>
      </div>
      <ul className="pt-12">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex rounded-2xl mt-2 cursor-pointer text-sm items-center gap-x-4 ${
              open ? "w-[80%] pt-[13px] pb-[13px] pl-[16px] pr-[26px]" : "p-2"
            } ${activeIndex === index ? "bg-white text-orange" : "text-gray-300"}`}
            onClick={() => setActiveIndex(index)}
          >
            <Link to={Menu.link} className="flex items-center justify-center gap-5">
                <span className="text-[22px]">{Menu.src}</span>
                <span
                className={`${
                    !open && "hidden"
                } text-[14px] font-mont font-600 origin-left duration-200`}
                >
                {Menu.title}
                </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
