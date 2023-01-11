import React from "react";
import ServiceCard from "./ServiceCard";

function Service() {
  return (
    <div className="ml-12">
      <h1 className="text-5xl font-Oswald mt-4 mb-4">
        Enhance Your Experience
      </h1>
      <p></p>
      <div className="grid lg:grid-cols-3 gap-y-8 md:grid-cols-2 gap-x-4 ">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
}

export default Service;
