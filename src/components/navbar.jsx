import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GoSearch, GoX } from "react-icons/go";
import { HiLogout } from "react-icons/hi";
import Logo from "../assets/images/movie-logo.jpg";
import { useUser } from "./context";

const Navbar = () => {

  const {
    movieData,
    setMovieData,
    tvData,
    setTvData,
    query,
    setQuery,
  } = useUser();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleCloseClick = () => {
    setIsSearchOpen(false);
  };

  useEffect(() => {
    if (query !== "") {
      setQuery("");
    }
  }, [query, setQuery]);

  return (
    <div className="bg-black font-normal text-white w-full h-[3.5rem] flex flex-row justify-around gap-16 px-20 items-center relative">
      <Link to="/home-page">
        <img className="h-[3.5rem] cursor-pointer" src={Logo} alt="Logo" />
      </Link>

      <div className="flex flex-row items-center justify-around gap-10">
        <span className="text-xl cursor-pointer">
          <Link to="/home-page">Home</Link>
        </span>
        <span className="text-xl cursor-pointer">
          <Link to="/movie">Movies</Link>
        </span>
        <span className="text-xl cursor-pointer">
          <Link to="/tv-shows">Tv Shows</Link>
        </span>
        <span className="text-xl cursor-pointer">
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
            className="w-full p-2 text-white bg-black border-none rounded-md"
            onInput={(event) => {
              setMovieData(() => []);
              setTvData(() => []);
              setQuery(event.target.value);
            }}
          />
          <div
            className="absolute cursor-pointer top-2 right-2"
            onClick={handleCloseClick}
          >
            <GoX className="w-4 h-4 text-white" />
          </div>
        </div>
      )}
      <Link to="/logout">
        <div className="flex items-center ">
          <button className="px-4 py-2 text-white rounded-md ">Logout</button>
          <HiLogout />
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
