import Navbar from "./components/navbar";
import Login from "./components/login";
import Signup from "./components/signup";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
    <Navbar/>
    <Login/> 
    <Routes>
      <Route path="/Register" element={ <Signup/> }/>
      
    </Routes>
    </>
  )
}

export default App;
