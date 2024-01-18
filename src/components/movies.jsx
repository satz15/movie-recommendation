import { useEffect,useState } from "react";


const Movies = () => {

   // data
  const [ data, setData,] = useState([])
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjhhNGM5MWMxZTY0Y2UyNGI3ZjdlMjUyNzc4MzZiMiIsInN1YiI6IjY1OTUwZTdjZDdhNzBhMTFjNzY5MzFmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HgU4MUOWBdZf-S5TF-J-vhTH5Rc_hsdxhYz1JIU1xHQ'
    }
  };

  useEffect(()=>{
    
    fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US/', options)
      .then(response => response.json())
      .then(response => (setData(response),console.log(response)))
      .catch(err => console.error(err));
  },[])
   
    console.log(data.results)
    const imgPath = 'https://image.tmdb.org/t/p/w1280'

    return ( 
        <div className="bg-black w-[100%] min-h-[100]   flex flex-row flex-wrap
         items-center gap-4 shadow-lg overflow-hidden justify-evenly">
            {data && data.results?.map((ele,ind)=>{
                return (
                <div className="w-[25rem] p-3 w-96 gap-1 rounded-lg shadow-lg px-6
                mt-4 mb-8 flex flex-col hover:scale-105 justify-center items-center" key={ind}>
                    <img className="rounded-lg " src={imgPath+ele.poster_path} alt="image" />
                    <p className="text-xl text-cyan-50 mb-2">{ele.original_title}</p>
                    {/* <p className="text-white">{ele.vote_average}</p> */}
                </div>)
            })}
        </div>

     );
}
 
export default Movies;  