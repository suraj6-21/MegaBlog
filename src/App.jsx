import { useState } from "react";
import "./App.css";

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL);

  return (
    <>
      <h1 class="text-3xl bg-gray-800 font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
