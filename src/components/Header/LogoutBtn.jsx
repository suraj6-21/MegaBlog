import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/Config";
import { logout } from "../../Store/AuthSlice";

const LogoutBtn = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService
      .logout()
      .then(() => {
        dispatch(logout());
        // Optionally, you can redirect or refresh the page after logout
        // window.location.reload();
      })
      .catch((error) => {
        console.error("Logout failed from Header logoutBtn", error);
      });
  };

  return (
    <button className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full">
      Logout
    </button>
  );
};

export default LogoutBtn;
