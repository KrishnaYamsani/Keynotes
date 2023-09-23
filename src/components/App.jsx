import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Home from "./Home";
import Notes from "./Notes";
import Navbar from "./navbar";
import Login from "./Login";
import Signin from "./Signin"
function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route index element={<Home />} />
          <Route path="notes" element={<Notes />} />
          <Route path="signin" element={<Signin />} />
          <Route path="login" element={<Login />} />
          <Route index element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
