import Navbar from "./navbar";
import { useUser } from "./context";

const Home = () => {
  const { movieData, setMovieData, query, setQuery } = useUser();

  return (
    <div>
      <Navbar />
      <div className="parent">
        <div className="background"></div>
        <div className="flex flex-col text-violet-50 items-center justify-center pb-6 gap-8 min-h-screen child">
          <span className="text-7xl font-bold ">Welcome</span>
          <span className="text-4xl font-semibold ">
            Unlimited movies, TV shows and more
          </span>
          {/* <div className="">
            <input  
            className="rounded-3xl h-[3rem] w-[35rem] outline-none text-black pl-8 font-semibold text-xl"
              type="text "
              placeholder ="search for your favourite"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
