import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";

function Nav() {
  return (
    <>
      <ul className="h-full">
        <li>
          <div className="bg-slate-800 block min-h-full	">
            <h1 className="text-1xl font-Oswald text-red-600 font-bold text-lg">
              Touch
              <br />
              Paradise
            </h1>
          </div>
        </li>
        <li>
          <Icon color="primary">search</Icon>
        </li>
        <li>
          <ExploreOutlinedIcon color="primary" />{" "}
        </li>
        <li>
          <Icon color="primary">contact_page_outlined</Icon>
        </li>
        <li>
          <Icon color="primary">account_circle_outlined</Icon>
        </li>
        <li>
          <ExploreOutlinedIcon color="primary" />
        </li>
      </ul>
    </>
  );
}

export default Nav;
