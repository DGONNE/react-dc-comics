import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Card from "./components/Card";
import "./index.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Card />
      <Navbar />
      <Section />
      <Main />
      <Footer />
    </div>
  );
}

import comics from "./data"; // Importiamo l'array

const App = () => {
  return (
    <div className="container">
      <h2>Current Series</h2>
      <div className="card-container">
        {comics.map((comic) => (
          <Card key={comic.id} title={comic.title} image={comic.image} />
        ))}
      </div>
    </div>
  );
};

export default App;
