import React, { useState } from 'react';
import Card from './Homepages/CardProduct';
import Image from '../Images/belt1.jpg';
import "./AllProduct.css"

const AllProduct = () => {
  // Example product list with 18 products (you can replace with your real data)
  const products = Array(22).fill({
    name: "Leather Belt",
    details: "Premium quality leather belt for casual and formal wear.",
    image: Image,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  // Calculate the number of total pages
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Get the current page products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Handle changing the page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <h1>Our Products</h1>
      <div className="carcontainer">
        {currentProducts.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>
      
      {/* Pagination controls */}
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span> Page {currentPage} of {totalPages} </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default AllProduct;
