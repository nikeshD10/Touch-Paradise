import React from "react";
import HeaderCard from "../components/HeaderCard";
import AboutUS from "./AboutUS";
import Service from "./Service";

function Body() {
  return (
    /*
    w-screen helps to strech your body width upto the full screen or available viewport
    */
    <div className="bg-gray-400 w-screen	">
      <HeaderCard />
      <AboutUS />
      <Service />
    </div>
  );
}

export default Body;
