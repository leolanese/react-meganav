import React from "react";
import { DropDownItem } from "./DropDownItem";
import img from "./../images/monitor.jpg";

export const DropDown = () => {
  return (
    <div className="dropdown">
      <DropDownItem>
        <h2>column 1</h2>
        <p>View All</p>
      </DropDownItem>
      <DropDownItem>
        <h2>column 2</h2>
        <p>Mens</p>
      </DropDownItem>
      <DropDownItem>
        <h2>column 3</h2>
        <ul>
          <li>
            <a href="#">Link1</a>
          </li>
          <li>
            <a href="#">Link2</a>
          </li>
          <li>
            <a href="#">Link3</a>
          </li>
          <li>
            <a href="#">Link4</a>
          </li>
        </ul>
      </DropDownItem>
      <DropDownItem>
        <h2>column 4</h2>
        <div className="img-column">
          <img src={img} alt="img" />
        </div>
      </DropDownItem>
    </div>
  );
};
