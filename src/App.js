import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./Components/Banner";
import Movies from "./Components/Movies";
import NavBar from "./Components/NavBar";
import React from "react";
import WatchList from "./Components/WatchList";

function App() {
  return (
    <div className=" bg-slate-900 p-4">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies />
              </>
            }
          ></Route>
          <Route path="/WatchList" element={<WatchList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
