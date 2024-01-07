import Login from "./components/login";
import Navbar from "./components/navbar";
import { Routes,Route } from "react-router-dom";
import Signup from "./components/signup";
import Home from "./components/home-page";
import Movies from "./components/movies";
import Tv from "./components/tvshows";
import Favourites from "./components/favourites";
import { useEffect, useState } from "react";
import {SingleMovie} from "./components/singlemovie"

function App() {

  // data
  const [ data, setData] = useState([])
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjhhNGM5MWMxZTY0Y2UyNGI3ZjdlMjUyNzc4MzZiMiIsInN1YiI6IjY1OTUwZTdjZDdhNzBhMTFjNzY5MzFmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HgU4MUOWBdZf-S5TF-J-vhTH5Rc_hsdxhYz1JIU1xHQ'
    }
  };

  

  useEffect(()=>{
    
    fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
      .then(response => response.json())
      .then(response => (setData(response),console.log(response)))
      .catch(err => console.error(err));
  },[])

  return (
    <div className="w-[100vw]">
     <Navbar/>
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/Register' element={<Signup/>} />
      <Route path='/home-page' element={<Home/>}/>
      <Route 
      path='/movie' 
      element={<Movies data={data}/>} 
      children={
        [
          // {
          //   path: "/movie:movieId",
          //   element: <SingleMovie />,
          // }
        ]
      }/>
      <Route path='/tv' element={<Tv/>}/>
      <Route path='/favourites' element={<Favourites/>}/>
      <Route path="/sign" element={<Login/>}/>
     </Routes>
    </div>
  )
}

export default App;
