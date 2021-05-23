import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";

function ProductContainer() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios
      .get("http://localhost:9000/api/products")
      .then((res) => setProducts(res.data));
  }, []);
  console.log('products >>>',products)
  return (
    <div className="p-2 mt-0 md:-mt-48 grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product)=>(
        <Product 
          id={product._id}
          title={product.title}
          price={product.price}
          rating={product.rating}
          img={product.img}
        />
      ))}
      
  
    </div>
  );
}

export default ProductContainer;
