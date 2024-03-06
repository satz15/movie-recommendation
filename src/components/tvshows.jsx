import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import Navbar from "./navbar";
import { useFavorites } from "../context/favouritecontext";
import { Link } from "react-router-dom";
// import Search from "./Search";
import { useUser } from "./context";

const Tv = () => {

  const {
    tvData,
    setTvData,
    query,
    setQuery,
  } = useUser();

  const { favorites, addToFavorites } = useFavorites();
  const [isLoading, setIsLoading] = useState(false);
  const [tvpage, setTvPage] = useState(1);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjhhNGM5MWMxZTY0Y2UyNGI3ZjdlMjUyNzc4MzZiMiIsInN1YiI6IjY1OTUwZTdjZDdhNzBhMTFjNzY5MzFmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HgU4MUOWBdZf-S5TF-J-vhTH5Rc_hsdxhYz1JIU1xHQ",
    },
  };

  const fetchTvData = async () => {
    setIsLoading(true);
    const url = query
      ? `https://api.themoviedb.org/3/search/tv?query=${query}&api_key=0b8a4c91c1e64ce24b7f7e25277836b2&page`
      : `https://api.themoviedb.org/3/trending/tv/day?language=en-US&api_key=0b8a4c91c1e64ce24b7f7e25277836b2&page=${tvpage}`;
    console.log(url);
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      // console.log(data);
      console.log(tvData);
      // setData([...data, ...result.results]);
      setTvData([...tvData, ...result.results]);
      setMoviePage((page) => page + 1);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

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
      setTvPage((prev) => prev + 1);
    }
    fetchTvData();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  const imgPath = "https://image.tmdb.org/t/p/w1280";

  useEffect(() => {
    setTvData([]);
    fetchTvData();
  }, [query]);

  return (
    <div>
      <Navbar />
      <div className="flex flex-row flex-wrap items-center w-full min-h-screen gap-4 overflow-hidden bg-black shadow-lg justify-evenly">
        {tvData &&
          tvData.map((ele, ind) => {
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

                  <div className="mt-2 mb-2 text-xl text-cyan-50">
                    {ele.original_name}
                  </div>
                </Link>
                <button
                  onClick={() => handleAddToFavorites(ele)}
                  className="absolute px-4 py-2 text-white transition duration-300 rounded-full bottom-12 right-5 bg-rose-900 hover:bg-rose-950"
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
