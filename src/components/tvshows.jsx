import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import Navbar from "./navbar";

const Tv = ({
  data,
  setData,
  fetchData,
  isLoading,
  setIsLoading,
  page,
  setPage,
}) => {
  // const [ data, setData,] = useState([])
  // const [isLoading,setIsLoading] = useState(false);
  // const [page,setPage] = useState(1);

  // const options = {
  //     method: 'GET',
  //     headers: {
  //       accept: 'application/json',
  //       Authorization: 'Bearer 0b8a4c91c1e64ce24b7f7e25277836b2'
  //     }
  //   };

  // const fetchData = async()=> {
  //     console.log("inside fetch")
  //     setIsLoading(true);
  //     try{
  //         const response = await fetch(`https://api.themoviedb.org/3/trending/tv/day?language=en-US&api_key=0b8a4c91c1e64ce24b7f7e25277836b2&page=${page}`,options);
  //         const result = await response.json();
  //         console.log(result)
  //         setData(prev => {
  //             console.log("old data",prev)
  //             return [...prev,...result.results];
  //             // prev.results = [prev.results,result.results]
  //         })
  //         setPage(previous=> previous+1)
  //     } catch (err){
  //         console.log(err);
  //     }finally {
  //         setIsLoading(false);
  //       }
  // }
  // console.log(data)
  const handleScroll = () => {
    console.log("i am handlescroll");
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isLoading
    ) {
      return;
    }
    fetchData();
  };

  useEffect(() => {
    console.log("sec effect");
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  //   useEffect(()=>{
  //     console.log("hit");
  //     fetchData();
  //   },[])

  console.log(data);
  const imgPath = "https://image.tmdb.org/t/p/w1280";

  return (
    <div>
      <Navbar />
      <div
        className="bg-black w-[100%] min-h-[100]  flex flex-row flex-wrap
        items-center gap-4 shadow-lg overflow-hidden justify-evenly"
      >
        {data &&
          data.map((ele, ind) => {
            return (
              <div
                className="relative w-[20rem] p-3 gap-1 rounded-lg hover:scale-105 transition duration-150 shadow-lg px-6 mt-4 mb-8"
                key={ind}
              >
                <img
                  className="rounded-lg"
                  src={imgPath + ele.poster_path}
                  alt="image"
                />
                <button
                  onClick={() => addToFavorites(ele)}
                  className="absolute top-96 right-6 bg-rose-900 text-white px-4 py-2 rounded-full hover:bg-rose-950 transition duration-300"
                >
                  <FaHeart />
                </button>
                <div className="text-xl text-cyan-50 mt-2 mb-2">
                  {ele.original_name}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Tv;
