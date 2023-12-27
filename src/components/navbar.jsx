import Logo from '../assets/images/movie-logo.jpg'
import { GoSearch } from "react-icons/go";

const Navbar = () => {
    return (
        <div className='bg-black font-mono text-white w-full h-[3.5rem] flex flex-row  justify-between px-20  items-center'>
         <div >
           <img className='h-[3.5rem] ' src={Logo} alt="" />
         </div>

         <div className='flex flex-row justify-around gap-6 items-center'>
         <span className="cursor-pointer text-xl ">
          Home
        </span>
        <span className="cursor-pointer text-xl ">
          Movies
        </span>
        <span className="cursor-pointer text-xl ">
          Tv Shows
        </span>
        <span className="cursor-pointer text-xl ">
          Favourites
        </span>
         </div>

         <div className=' flex items-center cursor-pointer'>
         <GoSearch className='h-[1.5rem] w-[2rem]'/>
         </div>
        </div>
    )
}

export default Navbar;