import React from "react";
import HeaderImage from "../assets/about_us.png";
import { Button } from "@mui/material";
function AboutUS() {
  return (
    <div>
      <div className="flex justify-center items-center ml-12">
        <div className="flex flex-col">
          <h1 className="text-7xl font-Oswald mb-4"> Know more about us</h1>
          <p>
            Enim aute mollit id magna. Culpa cupidatat est laboris amet aliqua
            dolor. Qui dolor laboris qui enim duis minim eu laboris. Eiusmod id
            labore nulla incididunt proident. Sunt anim cupidatat ut deserunt
            aliqua ea do. Id eu ullamco id et ipsum culpa duis minim ea occaecat
            adipisicing anim.Nostrud consectetur sunt aliquip ipsum Lorem aute.
            Sunt dolore fugiat incididunt excepteur dolore qui labore duis
            commodo ut voluptate excepteur ea consectetur. Ex laboris
            exercitation do dolor ex nulla est incididunt amet non. Exercitation
            excepteur duis proident in ipsum amet aliqua Lorem nostrud dolore
            commodo magna officia. Elit ad duis sunt mollit sint do qui amet
            consectetur aliqua deserunt sit.
          </p>
          <div className="mt-12">
            <Button variant="contained">More...</Button>
          </div>
        </div>

        <img
          src={HeaderImage}
          alt="homeheader"
          className="max-w-full	max-h-screen "
        />
      </div>
    </div>
  );
}

export default AboutUS;
