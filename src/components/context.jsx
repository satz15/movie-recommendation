import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState(null);
  const [displayName, setDisplayName] = useState(null);
  const [movieData, setMovieData] = useState([]);
  const [tvData, setTvData] = useState([]);
  const [query, setQuery] = useState("");

  const [formFields, setFormFields] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const setUser = (email, name) => {
    setUserEmail(email);
    setDisplayName(name);
  };

  return (
    <UserContext.Provider
      value={{
        userEmail,
        displayName,
        setUser,
        formFields,
        setFormFields,
        query,
        setQuery,
        movieData,
        setMovieData,
        tvData,
        setTvData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
