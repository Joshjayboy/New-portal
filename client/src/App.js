import React from "react";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ErrorPage from "./components/Errorpage";

const App = () => {
  return (
    <>
      <Routes>
      
          {/* <Route exact path="/" element={<Navbar />} /> */}
          <Route exact path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

          <Route path="*" element={<ErrorPage />}></Route>
     
      </Routes>
    </>
  );
};

export default App;
