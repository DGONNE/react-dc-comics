import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <Section />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
