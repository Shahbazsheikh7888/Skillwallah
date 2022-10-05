import React, {useState} from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";


const Navbar=() => {
  const [nav,setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className="flex justify-between items-center  h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-5xl font-bold text-[#00df9a]">SKILLWALLAH</h1>
      <ul className="flex - hidden">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Courses</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav}>
        {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        
      </div>
      <div className ={!nav ? "fixed left-0 top-10 w-[20%] border-r h-full border-r-gray-900 ease-in-out duration-500" :'fixed left-[-100%]'}>
        <ul className="p-20 uppercase " >
          <li className="p-4 border-b border-gray-500">Home</li>
          <li className="p-4 border-b border-gray-500">Company</li>
          <li className="p-4 border-b border-gray-500">Courses</li>
          <li className="p-4 border-b border-gray-500">About</li>
          <li className="p-4 ">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
