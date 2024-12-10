import React from 'react'

export const Input = ({type, name, classes}) => {
  return (
    <input
      type={type}
      name={name}
      id={name}
      className={`rounded-lg border border-[#37729c] h-[30px] outline-none px-[10px] bg-[#134668] text-white text-xs hover:border-[#fbb13c] focus:border-[#fbb13c] transition-colors ${classes}`}
    />
  );
}
