import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";

const Moviedetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState([]);

  const imgPath = "https://image.tmdb.org/t/p/w1280";
  const castImgPath = "https://image.tmdb.org/t/p/w400"; // Increased size for cast images

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=0b8a4c91c1e64ce24b7f7e25277836b2`
        );
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    const fetchCastDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=0b8a4c91c1e64ce24b7f7e25277836b2`
        );
        const data = await response.json();
        setCast(data.cast.slice(0, 10));
      } catch (error) {
        console.error("Error fetching cast details:", error);
      }
    };

    fetchMovieDetails();
    fetchCastDetails();
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="h-full bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage: `url(${imgPath}${movieDetails.backdrop_path})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center">
        <div className="py-8 px-4 md:px-0 max-w-screen-xl mx-auto">
          <Link to="/movie" className="text-white absolute top-4 right-4">
            <AiFillCloseCircle size={32} />
          </Link>
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-white">
                {movieDetails.original_title}
              </h1>
              <p className="text-lg text-white mt-2">
                Release Year: {movieDetails.release_date.slice(0, 4)}
              </p>
              <p className="text-lg text-white mt-2">{movieDetails.overview}</p>
              <p className="text-lg text-white mt-2">
                Release Date: {movieDetails.release_date}
              </p>
            </div>
            <div className="flex items-center">
              {/* <button className="bg-red-600 text-white py-2 px-4 rounded-md mr-4">
                Watch Trailer
              </button> */}
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-white mb-4">Top Cast:</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {cast.map((actor) => (
                <div key={actor.id} className="flex flex-col items-center">
                  <img
                    className="rounded-full "
                    src={`${castImgPath}${actor.profile_path}`}
                    alt={actor.name}
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                  <p className="text-lg mt-2 text-white">{actor.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moviedetails;
