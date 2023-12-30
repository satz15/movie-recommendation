import { Link } from "react-router-dom";
import {
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../utils/firebase";
import { useUser } from "./context";

const Login = () => {

  const { formFields, setFormFields, setUser } = useUser();
  const { displayName, email, password, confirmPassword } = formFields;

  const submitHandler = async (e) => {
    console.log("hit");
    if (email && password) {
      console.log(email," ==", password)
      try {
        const formFields = await signInAuthUserWithEmailAndPassword(
          email,
          password
        );
        console.log( formFields );
      } catch (err) {
        console.log("Error Occurd while Login", err.message);
        console.log(err.code);
        if (err.code === "auth/invalid-credential") {
          alert("Invalid Credentials");
        }
      }
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
    console.log(e.target.name);
  };

    return ( 
        <div className="flex items-center justify-center  min-h-screen image">
        <div className="w-full max-w-lg p-8 rounded-md shadow-lg font-mono bg-opacity-70 bg-zinc-900">
          <h2 className="mb-6 text-2xl text-white flex justify-center font-mono">Sign In</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white text-bl">Username</label>
            <input
              type="email"
              id="username"
              name="email"
              onChange={changeHandler}
              className="w-full p-2 mt-1  bg-zinc-800 focus:outline-none focus:ring focus:border-stone-950 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white text-bl">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={changeHandler}
              className="w-full p-2 mt-1  bg-zinc-800 focus:outline-none focus:ring focus:border-blue-300 rounded-md"
            />
          </div>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={submitHandler}
              className="w-full py-2 mt-4 text-white bg-rose-900 rounded-md  focus:outline-none"
            >
              Login
            </button>
          </div>
          <div className="flex items-center mt-6 justify-evenly">
            <p className="text-white">New user?</p>
            <button className="w-32 py-2 text-white bg-rose-900 rounded-md w focus:outline-none">
            <Link to='/Register'> Register Here </Link> 
            </button>
          </div>
        </div>
      </div>
     );
}
 
export default Login;