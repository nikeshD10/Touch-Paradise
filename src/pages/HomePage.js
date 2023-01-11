import React from "react";
import Body from "../components/Body";
import Nav from "../components/Nav";

function HomePage() {
  return (
    <div className="container grid grid-rows-12">
      <Nav />
      <Body />
    </div>
  );
}

export default HomePage;
