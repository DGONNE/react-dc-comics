import React from "react";
import Jumbotron from "./Jumbotron";

function Main() {
  return (
    <main className="main-content">
      <Jumbotron /> {/* Jumbotron dentro Main */}
      <div className="content-placeholder">
        &lt;!-- Content goes here --&gt;
      </div>
    </main>
  );
}

export default Main;
