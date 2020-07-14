import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

export const NavItem = (props) => {
  const [open, setInProp] = useState(false);

  return (
    <li className="nav-item" onClick={() => setInProp(!open)}>
      <a href="#" className="nav-link">
        {props.link}
      </a>
      <CSSTransition
        in={open}
        unmountOnExit
        timeout={1500}
        classNames="megaNav"
      >
        <div className="menu">{props.children}</div>
      </CSSTransition>
    </li>
  );
};
