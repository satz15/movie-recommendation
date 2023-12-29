import Logo from '../assets/images/movie-logo.jpg'
import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='bg-black font-mono text-white w-full h-[3.5rem] flex flex-row  justify-between px-20  items-center'>
         <div >
           <img className='h-[3.5rem] ' src={Logo} alt="" />
         </div>

         <div className='flex flex-row justify-around gap-6 items-center'>
         <span className="cursor-pointer text-xl ">
         <Link to='/home-page'>Home</Link>
        </span>
        <span className="cursor-pointer text-xl ">
         <Link to='/movie'>Movies</Link> 
        </span>
        <span className="cursor-pointer text-xl ">
         <Link to='tv'>Tv Shows </Link> 
        </span>
        <span className="cursor-pointer text-xl ">
         <Link to='favourites'>Favourites</Link> 
        </span>
         </div>

         <div className=' flex items-center cursor-pointer'>
         <GoSearch className='h-[1.5rem] w-[2rem]'/>
         </div>
        </div>
    )
}

export default Navbar;