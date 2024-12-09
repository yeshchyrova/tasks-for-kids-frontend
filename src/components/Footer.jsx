import React from 'react'

export const Footer = () => {
  return (
    <footer className="ml-[250px] h-[98px] bg-[#dadde8] flex justify-center items-center">
      <p className="text-center text-blue text-sm font-semibold">
        Designed by{" "}
        <a
          className="text-blue text-sm font-semibold"
          target="_blank"
          href="https://github.com/yeshchyrova"
          rel="noreferrer noopener"
        >
          yeshchyrova
        </a>
      </p>
    </footer>
  );
}
