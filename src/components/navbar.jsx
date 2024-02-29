import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GoSearch, GoX } from "react-icons/go";
import { HiLogout } from "react-icons/hi";
import Logo from "../assets/images/movie-logo.jpg";
import { useUser } from "./context";

const Navbar = () => {
  // const [data, setData] = useState([]);
  const { data, setData, query, setQuery } = useUser();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleCloseClick = () => {
    setIsSearchOpen(false);
  };


  return (
    <div className="bg-black font-normal text-white w-full h-[3.5rem] flex flex-row justify-around gap-16 px-20 items-center relative">
      <div>
        <img className="h-[3.5rem] cursor-pointer" src={Logo} alt="Logo" />
      </div>

      <div className="flex flex-row justify-around gap-10 items-center">
        <span className="cursor-pointer text-xl">
          <Link to="/home-page">Home</Link>
        </span>
        <span className="cursor-pointer text-xl">
          <Link to="/movie">Movies</Link>
        </span>
        <span className="cursor-pointer text-xl">
          <Link to="/tv-shows">Tv Shows</Link>
        </span>
        <span className="cursor-pointer text-xl">
          <Link to="/favourites">Favourites</Link>
        </span>
      </div>

      <div
        className="flex items-center cursor-pointer"
        onClick={handleSearchClick}
      >
        {isSearchOpen ? (
          <GoX className="h-[1.5rem] w-[2rem]" />
        ) : (
          <GoSearch className="h-[1.5rem] w-[2rem]" />
        )}
      </div>

      {isSearchOpen && (
        <div className="absolute top-[3.5rem] left-0 right-0 mt-2 p-4 bg-opacity-20 border-none rounded shadow-lg z-10">
          <input
            type="text"
            placeholder="Search for Movies or TV shows..."
            className="p-2 border-none rounded-md w-full text-white bg-black"
            onInput={(event) => {
              setData(() => []);
              setQuery(event.target.value);
            }}
          />
          <div
            className="absolute top-2 right-2 cursor-pointer"
            onClick={handleCloseClick}
          >
            <GoX className="h-4 w-4 text-white" />
          </div>
        </div>
      )}
      <Link to="/logout">
        <div className="flex items-center ">
          <button className=" text-white px-4 py-2 rounded-md">Logout</button>
          <HiLogout />
        </div>
      </Link>
    </div>
  );
}

export default Navbar;