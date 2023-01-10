import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

function Nav() {
  return (
    <>
      <ul className="h-full fixed bg-slate-800 w-24  grid grid-cols-1 nav">
        <li className="nav-component">
          <h1 className="text-1xl font-Oswald text-red-600 font-bold text-lg mt-6">
            Touch
            <br />
            Paradise
          </h1>
        </li>
        <li className="nav-component">
          <SearchOutlinedIcon color="primary" />
        </li>
        <li className="nav-component">
          <ExploreOutlinedIcon color="primary" />
        </li>
        <li className="nav-component">
          <ContactPageOutlinedIcon color="primary" />
        </li>
        <li className="nav-component">
          <PersonOutlinedIcon color="primary" />
        </li>
        <li className="nav-component">
          <div className=" shadow-indigo-500 shadow-2xl	hover:shadow-lg shadow border-solid border-2	border-white	rounded-lg mr-7 p-2">
            <ul>
              <li className="pt-3">
                <FacebookIcon color="primary" />
              </li>
              <li className="pt-3">
                <InstagramIcon color="primary" />
              </li>
              <li className="pt-3">
                <MailOutlineIcon color="primary" />
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </>
  );
}

export default Nav;
