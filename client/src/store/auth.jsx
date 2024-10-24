import { useContext, createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const [services, setServices] = useState("")
  const authorizationToken = `Bearer ${token}`

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const storeTokenInLS = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken); // Update token state
  };

  const isLoggedIn = !!token;
  console.log("isLoggedIn", isLoggedIn);

  const LogoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
    setUser(null); // Clear user data on logout
  };

  // JWT AUTHENTICATION
  const userAuthentication = async () => {
    if (!token) return; // Don't make the request if there's no token

    try {
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("user data", data.userData);
        setUser(data.userData);
      } else {
        console.log("Failed to fetch user data", response.statusText);
        LogoutUser(); // Optional: Logout user if token is invalid
      }
    } catch (error) {
      console.log("Error fetching user data", error);
    }
  };

  const getServices = async() => {
    try {
      const response = await fetch("http://localhost:5000/api/data/service", {
        method: "GET",
      })
      if (response.ok) {
        const data = await response.json();
        console.log(data.msg);
        setServices(data.msg)
        
      }
    } catch (error) {
      console.log(`services fronted error: ${error}`);
      
    }
  }

  useEffect(() => {
    getServices()
    userAuthentication();
  }, [token]); // Only run when token changes

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, storeTokenInLS, LogoutUser, user, services, authorizationToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return authContextValue;
};

