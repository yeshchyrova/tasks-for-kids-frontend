import { GoPlus } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa6";
import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const handleLogout = () => {
    console.log("Logout!");
  };

  const openModal = () => {
    console.log("Open modal!");
  };

  return (
    <header className="h-[82px] bg-white shadow flex justify-end items-center px-16">
      <button
        className="bg-red rounded-lg py-[11px] px-[18px] text-white text-lg font-medium"
        type="button"
        onClick={openModal}
      >
        Add family member
      </button>
      <button
        className="text-lg font-medium  py-[10px] px-[21px] rounded-lg border-2 border-red"
        onClick={handleLogout}
      >
        Logout
      </button>
    </header>
  );
};

// const Header = () => {
//   const handleLogout = () => {
//     dispatch(logout())
//   }
//   return (
//     <header>
//       <p>Dashboard</p>
//       <div>
//         <button type="button">Add new family member</button>
//         <button type="button" onClick={handleLogout}>
//           Logout
//         </button>
//       </div>
//     </header>
//   );
// }

// export default Header
