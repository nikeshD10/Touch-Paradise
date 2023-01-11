import React from "react";
import HeaderImage from "../assets/HomeHeader.gif";
import { Button } from "@mui/material";

function HeaderCard() {
  return (
    <div className="relative h-80 w-full ">
      <img
        src={HeaderImage}
        alt="homeheader"
        className="relative homeheader w-full h-2/5 rounded-b-lg shadow-xl shadow-white 	"
      />

      <div className="absolute top-0 flex flex-col ml-8">
        <h1 className="text-white lg:text-7xl md:text-xl font-Oswald mt-4 col-span-3	">
          TOUCH PARADISE
        </h1>
        <div className=" mt-12 lg:grid grid-cols-4 ">
          <p className="text-white ">
            Cillum ipsum velit do velit amet officia. Dolor commodo non magna ut
            commodo fugiat cillum dolore esse ullamco. Consectetur veniam ipsum
            incididunt dolor veniam voluptate. Excepteur tempor esse laborum
            enim. Pariatur tempor nostrud occaecat mollit ullamco. Sit consequat
            nulla laboris tempor nisi occaecat.
          </p>
        </div>
        <div className="mt-12">
          <Button variant="outlined" color="red">
            Outlined
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeaderCard;
