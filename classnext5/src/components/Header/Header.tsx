import React from 'react'
import Navbar from '../Navbar/Navbar'
import Logo from '../Logo/Logo';
import {Poppins} from "@next/font/google";
const poppins = Poppins({
  weight: '400', 
  subsets: ['latin'], 
  display: 'swap', 
});
function Header() {
  return (
    <header className={`shadow-md flex justify-evenly items-center py-1 ${poppins.className}`}>
        <Logo/>
      <Navbar/>
    </header>
  );
};
export default Header;