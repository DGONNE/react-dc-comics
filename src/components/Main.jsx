import React from "react";
import Jumbotron from "./Jumbotron";

function MainContent() {
  return (
    <main className="main-content">
      <Jumbotron /> {/* Jumbotron dentro MainContent */}
      <div className="content-placeholder">
        &lt;!-- Content goes here --&gt;
      </div>
    </main>
  );
}

export default MainContent;
