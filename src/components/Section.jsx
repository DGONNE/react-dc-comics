import React from "react";

const Section = () => {
  return (
    <section
      style={{
        background: "#007BFF",
        display: "flex",
        justifyContent: "space-around",
        padding: "1rem",
      }}
    >
      <div>
        <img src="/images/buy-comics-digital-comics.png"></img> DIGITAL COMICS
      </div>
      <div>
        <img src="/images/buy-comics-merchandise.png"></img> DC MERCHANDISE
      </div>
      <div>
        <img src="/images/buy-comics-subscriptions.png"></img> SUBSCRIPTION
      </div>
      <div>
        <img src="/images/buy-comics-shop-locator.png"></img> COMIC SHOP LOCATOR
      </div>
      <div>
        <img src="/images/buy-dc-power-visa.svg"></img> DC POWER VISA
      </div>
    </section>
  );
};

export default Section;
