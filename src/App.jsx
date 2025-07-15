import "./App.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/Auth";
import { login, logout } from "./Store/AuthSlice";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

useEffect(() => {
  authService
    .getCurrentUser() // This is the problematic call for guests
    .then((userData) => {
      if (userData) {
        dispatch(
          login({
            userData,
          })
        );
      } else {
        dispatch(logout());
      }
    })
    .finally(() => {
      setLoading(false);
    });
}, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
