import React from "react";
import { Link } from "react-router-dom";

import classes from "./Cart.module.css";

const Cart = () => {
  return (
    <Link to="/" className={classes.btn}>
      Back To Store
    </Link>
  );
};

export default Cart;
