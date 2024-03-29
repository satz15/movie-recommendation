import Login from "./components/login";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/signup";
import Home from "./components/home-page";
import Movies from "./components/movies";
import Tv from "./components/tvshows";
import Favourites from "./components/favourites";
import { useEffect, useState } from "react";
import Moviedetails from "./components/moviedetails";
import Tvdetails from "./components/tvdetails";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer 0b8a4c91c1e64ce24b7f7e25277836b2",
    },
  };

  const fetchData = async () => {
    console.log("inside fetch", page);
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/tv/day?language=en-US&api_key=0b8a4c91c1e64ce24b7f7e25277836b2&page=${page}`,
        options
      );
      const result = await response.json();
      console.log(result);
      if (result.results && Array.isArray(result.results)) {
        // Check if result.results is iterable and an array
        setData((prevData) => [...prevData, ...result.results]);
        setPage((prevPage) => prevPage + 1);
      } else {
        console.error("Error: Result is not iterable or not an array.");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log("hit");
    fetchData();
  }, []);

  return (
    <div className="w-[100%]">
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Signup />} />

        <Route path="/home-page" element={<Home />} />
        <Route path="/movie" element={<Movies />} />
        <Route
          path="/tv-shows"
          element={
            <Tv
              data={data}
              setData={setData}
              fetchData={fetchData}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              page={page}
              setPage={setPage}
            />
          }
        />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/home-page" element={<Home />} />
        <Route path="/logout" element={<Login />} />
        <Route path="/sign" element={<Login />} />
        <Route path="/movies/:id" element={<Moviedetails />} />
        <Route path="/tv/:id" element={<Tvdetails />} />
      </Routes>
    </div>
  );
}

export default App;
