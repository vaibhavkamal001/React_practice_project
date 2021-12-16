import React, { Fragment } from "react";

import { Link } from "react-router-dom";

import classes from "./product.module.css";

const Product = (props) => {
  
  const scrollToEnd = () => {
    props.onChangePage(props.page + 6);
  };

  window.onscroll = function () {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      scrollToEnd();
    }
  };

  const pro = props.product.map((ele) => {
    return (
      <div key={Math.random() + ele.id} className={classes.product}>
        <img src={ele.image} alt="" />
        <h3>{ele.title}</h3>
        <span className={classes.category}>{ele.category}</span>
        <div className={classes.info}>
          <span className={classes.price}>$ {ele.price}</span>
          <span className={classes.rating}>{ele.rating.rate}</span>
        </div>
        <Link className={classes.btn} to="/cart">
          Add To Cart
        </Link>
      </div>
    );
  });

  return <Fragment>{pro}</Fragment>;
};

export default Product;
