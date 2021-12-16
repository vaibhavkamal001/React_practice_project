import React, { useState, useEffect } from "react";
import axios from "axios";

import Product from "./product";
import classes from "./ProductContainer.module.css";

const ProductContainer = () => {
  const [posts, setPost] = useState([]);
  const [showPost, setShowPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      axios
        .get("http://fakestoreapi.com/products")
        .then((res) => setPost((prePost) => [...prePost, ...res.data]));
    };

    fetchProduct();
  }, []);

  useEffect(() => {
    const indexOfLastPost = currentPage + 6;
    const indexOfFirstPost = indexOfLastPost - 6;
    const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

    setShowPost((prePost) => {
      return [...prePost, ...currentPost];
    });

  }, [currentPage,posts]);

  if (currentPage > 18) {
    setCurrentPage(1);
  }

  return (
    <main className={classes.container}>
      <Product
        product={showPost}
        page={currentPage}
        onChangePage={setCurrentPage}
      />
    </main>
  );
};

export default ProductContainer;
