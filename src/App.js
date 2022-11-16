import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Navbar from "./components/Navbar";
import Post from "./components/Post";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/posts/:post_id" element={<Post />} />
            {/* <Route path="/:post_id" element={<Post />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
