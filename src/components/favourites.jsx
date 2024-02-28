import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { useFavorites, useFavoritesActions } from "../context/favouritecontext";
import Navbar from "./navbar";

const Favorites = () => {
  const { favorites } = useFavorites();
  const { removeFavorite } = useFavoritesActions();

  const handleRemoveFavorite = (index) => {
    removeFavorite(index);
  };

  const imgPath = "https://image.tmdb.org/t/p/w1280";

  return (
    <div>
      <Navbar />
      <div className="bg-black min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-white mb-8">Your Favorites</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favorites &&
              favorites.map((ele, ind) => (
                <div
                  className="relative rounded-lg overflow-hidden group"
                  key={ind}
                >
                  <img
                    className="w-full h-auto transition duration-300 transform group-hover:scale-105"
                    src={imgPath + ele.poster_path}
                    alt="image"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                    <button
                      onClick={() => handleRemoveFavorite(ind)}
                      className="text-white rounded-full p-2 bg-red-600 hover:bg-red-700 transition duration-300"
                    >
                      <AiTwotoneDelete />
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
