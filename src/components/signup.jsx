const Signup = () => {
    return ( 
        <div className="flex items-center justify-center min-h-screen image">
        <form
          className="w-full max-w-lg p-8 rounded-md font-mono shadow-lg bg-zinc-900 bg-opacity-70"
        //   onSubmit={submitHandler}
        >
          <h2 className="mb-4 text-2xl flex justify-center text-white font-semibold">Sign Up</h2>
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
            //   onChange={changeHandler}
              className="w-full p-2  border-gray-300 rounded-md  bg-zinc-800  focus:outline-none focus:ring focus:border-black"
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
            //   onChange={changeHandler}
              className="w-full p-2  border-gray-300  bg-zinc-800 rounded-md focus:outline-none focus:ring focus:border-blue-300"
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
            //   onChange={changeHandler}
              className="w-full p-2  border-gray-300 bg-zinc-800  rounded-md focus:outline-none focus:ring focus:border-blue-300"
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
            //   onChange={changeHandler}
              className="w-full p-2  border-gray-300 bg-zinc-800  rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 mt-3 text-white bg-rose-900 rounded-md  focus:outline-none focus:ring focus:border-blue-300"
          >
            Sign Up          
          </button>
        </form>
      </div>
     );
}
 
export default Signup;