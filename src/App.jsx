import Login from "./components/login";
import Navbar from "./components/navbar";
import { Routes,Route } from "react-router-dom";
import Signup from "./components/signup";
import Home from "./components/home-page";
import Movies from "./components/movies";
import Tv from "./components/tvshows";
import Favourites from "./components/favourites";

function App() {

  return (
    <>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/Register' element={<Signup/>} />
      <Route path='/home-page' element={<Home/>}/>
      <Route path='/movie' element={<Movies/>}/>
      <Route path='/tv' element={<Tv/>}/>
      <Route path='/favourites' element={<Favourites/>}/>
      <Route path="/sign" element={<Login/>}/>
     </Routes>
    </>
  )
}

export default App;
