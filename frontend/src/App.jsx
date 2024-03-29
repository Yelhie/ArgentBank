import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/HomePage";
import Login from "./pages/Login/LoginPage";
import User from "./pages/User/UserDetailsPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/user" element={<User />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
