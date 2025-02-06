import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Card from "./components/Card";
import "./index.css";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Navbar />
      <Main />
      <Section />
      <Card />
      <Footer />
    </div>
  );
};

export default App;
