import React from "react";
import Body from "../components/Body";
import Nav from "../components/Nav";

function HomePage() {
  return (
    <div className="flex grid grid-cols-1">
      <Nav />
      <Body />
    </div>
  );
}

export default HomePage;
