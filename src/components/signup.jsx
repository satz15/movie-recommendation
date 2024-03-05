import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../utils/firebase";
import { useUser } from "./context";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  // console.log(useUser());
  const navigate = useNavigate();

  const { formFields, setFormFields } = useUser();
  const { displayName, email, password, confirmPassword } = formFields;
  console.log(displayName, email);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password do not Match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
      console.log(
        createUserDocumentFromAuth(user, {
          displayName,
        })
      );
      const userDocRef = await createUserDocumentFromAuth(user, {
        displayName,
      });
      console.log(userDocRef);
      if (userDocRef) {
        alert("SignUp Success");
        navigate("/");
      }
    } catch (err) {
      console.log("Something Happened", err.message);
      console.log(err.code);
      if (err.code === "auth/email-already-in-use") {
        alert("Email Already Exists Please use alternate Email");
      } else if (err.code === "auth/weak-password") {
        alert("Password must be at least 6 characters long");
      }
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="flex items-center justify-center min-h-screen image">
      <form
        className="w-full max-w-lg p-8 rounded-md font-mono shadow-lg bg-zinc-900 bg-opacity-70"
        onSubmit={submitHandler}
      >
        <h2 className="mb-4 text-2xl flex justify-center text-white font-semibold">
          Sign Up
        </h2>
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block mb-2 text-sm font-medium text-white"
          >
            Username
          </label>
          <input
            type="text"
            id="display-name"
            name="displayName"
            onChange={changeHandler}
            className="w-full p-2  border-gray-300 rounded-md text-white bg-zinc-800  focus:outline-none focus:ring focus:border-black"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block mb-2 text-sm font-medium text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={changeHandler}
            className="w-full p-2  border-gray-300 text-white bg-zinc-800 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={changeHandler}
            className="w-full p-2  border-gray-300 text-white bg-zinc-800  rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-white"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            onChange={changeHandler}
            className="w-full p-2  border-gray-300 text-white bg-zinc-800  rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 mt-3 text-white bg-rose-900 rounded-md  focus:outline-none focus:ring focus:border-blue-300"
        >
          <Link to="/sign">Sign Up </Link>
        </button>
      </form>
    </div>
  );
};

export default Signup;
