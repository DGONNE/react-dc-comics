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
        <img src="public/images/buy-comics-digital-comics"></img> DIGITAL COMICS
      </div>
      <div>
        <img src="public/images/buy-comics-merchandise"></img> DC MERCHANDISE
      </div>
      <div>
        <img src="public/images/buy-comics-subscriptions"></img> SUBSCRIPTION
      </div>
      <div>
        <img src="public/images/buy-comics-shop-locator"></img> COMIC SHOP
        LOCATOR
      </div>
      <div>
        <img src="public/images/buy-dc-power-visa"></img> DC POWER VISA
      </div>
    </section>
  );
};

export default Section;
