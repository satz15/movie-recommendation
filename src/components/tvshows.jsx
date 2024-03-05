import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import Navbar from "./navbar";
import { useFavorites } from "../context/favouritecontext";
import { Link } from "react-router-dom";

const Tv = ({ data, fetchData, isLoading, setPage }) => {
  const { favorites, addToFavorites } = useFavorites();

  const handleAddToFavorites = (ele) => {
    const isAlreadyAdded = favorites.some((fav) => fav.id === ele.id);
    if (isAlreadyAdded) {
      alert("This TV show is already added to favorites.");
    } else {
      addToFavorites(ele);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
    }
    fetchData();
  };


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  const imgPath = "https://image.tmdb.org/t/p/w1280";

  return (
    <div>
      <Navbar />
      <div className="bg-black w-full min-h-screen flex flex-row flex-wrap items-center gap-4 shadow-lg overflow-hidden justify-evenly">
        {data &&
          data.map((ele, ind) => {
            return (
              <div
                className="relative w-[20rem] p-3 gap-1 rounded-lg hover:scale-105 transition duration-150 shadow-lg px-6 mt-4 mb-8"
                key={ind}
              >
                <Link to={`/tv/${ele.id}`} className="block">
                  <img
                    className="rounded-lg"
                    src={imgPath + ele.poster_path}
                    alt="image"
                  />

                  <div className="text-xl text-cyan-50 mt-2 mb-2">
                    {ele.original_name}
                  </div>
                </Link>
                <button
                  onClick={() => handleAddToFavorites(ele)}
                  className="absolute bottom-12 right-5 bg-rose-900 text-white px-4 py-2 rounded-full hover:bg-rose-950 transition duration-300"
                >
                  <FaHeart />
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Tv;
