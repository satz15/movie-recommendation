import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import Navbar from "./navbar";
import { useUser } from "./context";
import { useFavorites } from "../context/favouritecontext";
import { Link } from "react-router-dom";

const Movies = () => {
  // data
  const { data, setData, query } = useUser();
  // const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [moviepage, setMoviePage] = useState(1);
  const { favorites, addToFavorites } = useFavorites();

  const handleAddToFavorites = (ele) => {
    const isAlreadyAdded = favorites.some((fav) => fav.id === ele.id);
    if (isAlreadyAdded) {
      alert("This movie is already added to favorites.");
    } else {
      addToFavorites(ele);
    }
  };

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjhhNGM5MWMxZTY0Y2UyNGI3ZjdlMjUyNzc4MzZiMiIsInN1YiI6IjY1OTUwZTdjZDdhNzBhMTFjNzY5MzFmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HgU4MUOWBdZf-S5TF-J-vhTH5Rc_hsdxhYz1JIU1xHQ",
    },
  };
  

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setMoviePage((prev) => prev + 1);
    }
    fetchData();
  };

  const fetchData = async () => {
    setIsLoading(true);
    const url = query
      ? `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=0b8a4c91c1e64ce24b7f7e25277836b2&page`
      : `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=0b8a4c91c1e64ce24b7f7e25277836b2&page=${moviepage}`;
    console.log(url);
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(data);
      setData([...data, ...result.results]);
      setMoviePage((page) => page + 1);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  useEffect(() => {
    setData([]);
    fetchData();
  }, [query]);

  useEffect(() => {
    // console.log("sec effect");
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  // console.log(data.results);
  const imgPath = "https://image.tmdb.org/t/p/w1280";

  // const addToFavorites = (movie) => {
  //   setFavorites([...favorites, movie]);
  //   console.log("Added to favorites:", movie);
  // };

  return (
    <div>
      <Navbar />
      <div className="bg-black w-[100%] min-h-[100] flex flex-row flex-wrap items-center gap-4 shadow-lg overflow-hidden justify-evenly">
        {data &&
          data?.map((ele, ind) => {
            return (
              <div
                className="relative w-[20rem] rounded-lg hover:scale-105 transition duration-150  px-4 mt-4 mb-8"
                key={ind}
              >
                <Link to={`/movies/${ele.id}`} className="block">
                  <img
                    className="rounded-lg"
                    src={imgPath + ele.poster_path}
                    alt="image"
                  />
                  <div className="text-xl text-cyan-50 mt-2 mb-2">
                    {ele.original_title}
                  </div>
                </Link>
                <button
                  onClick={() => handleAddToFavorites(ele)}
                  className="absolute bottom-12 right-5 bg-rose-900 text-white px-4 py-2 rounded-full hover:bg-rose-950 transition duration-300"
                >
                  <FaHeart />
                </button>
                {/* <div className="text-xl text-cyan-50 mt-2 mb-2">
                  {ele.original_title}
                </div> */}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Movies;
