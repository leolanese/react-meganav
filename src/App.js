import React from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { NavItem } from "./components/NavItem";
import { DropDown } from "./components/DropDown";

function App() {
  return (
    <div className="App">
      <NavBar>
        <NavItem link="MENS" />
        <NavItem link="WOMENS">
          <DropDown />
        </NavItem>
        <NavItem link="OFFERS" />
        <NavItem link="CONTACTS" />
      </NavBar>
    </div>
  );
}

export default App;
