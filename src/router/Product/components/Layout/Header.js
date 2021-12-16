import React from "react";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <h1>Fake Store</h1>
    </header>
  );
};

export default Header;
