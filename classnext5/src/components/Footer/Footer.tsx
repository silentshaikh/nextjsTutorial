import { Poppins } from "@next/font/google";
const poppins = Poppins({
    weight: '400', 
    subsets: ['latin'], 
    display: 'swap', 
  });
function Footer() {

  return (
    <>
    <footer>
         <p className={`${poppins.className} text-center shadow-inner py-6`}>&copy; Copyright - Portfolio | All-Right-Reserved</p> 
    </footer>
    </>
  )
}

export default Footer
