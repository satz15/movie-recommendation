import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import Navbar from "./navbar";

const Movies = () => {
  // data
  const [data, setData] = useState([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjhhNGM5MWMxZTY0Y2UyNGI3ZjdlMjUyNzc4MzZiMiIsInN1YiI6IjY1OTUwZTdjZDdhNzBhMTFjNzY5MzFmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HgU4MUOWBdZf-S5TF-J-vhTH5Rc_hsdxhYz1JIU1xHQ",
    },
  };
  // console.log(body.offsetHeight);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US/",
      options
    )
      .then((response) => response.json())
      .then((response) => (setData(response), console.log(response)))
      .catch((err) => console.error(err));
  }, []);

  console.log(data.results);
  const imgPath = "https://image.tmdb.org/t/p/w1280";

  const addToFavorites = (movie) => {
    console.log("Added to favorites:", movie);
  };

  return (
    <div>
      <Navbar />
      <div className="bg-black w-[100%] min-h-[100] flex flex-row flex-wrap items-center gap-4 shadow-lg overflow-hidden justify-evenly">
        {data &&
          data.results?.map((ele, ind) => {
            return (
              <div
                className="relative w-[20rem] rounded-lg hover:scale-105 transition duration-150  px-4 mt-4 mb-8"
                key={ind}
              >
                <img
                  className="rounded-lg"
                  src={imgPath + ele.poster_path}
                  alt="image"
                />
                <button
                  onClick={() => addToFavorites(ele)}
                  className="absolute bottom-12 right-5 bg-rose-900 text-white px-4 py-2 rounded-full hover:bg-rose-950 transition duration-300"
                >
                  <FaHeart />
                </button>
                <div className="text-xl text-cyan-50 mt-2 mb-2">
                  {ele.original_title}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Movies;
