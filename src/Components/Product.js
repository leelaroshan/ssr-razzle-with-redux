import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Product() {
  const products = useSelector((state) => state.productsarray.products);

  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="container" key={id}>
        {/* <Link to={`/product/${id}`}> */}
          {/* <div className="card-container"> */}
            <div className="card">
              <div className="image">
                <img src={image} alt={title} style={{width:'150px',height:'150px'}}/>
              </div>
              <div className="content">
                <div className="header">Name:{title}</div>
                <div className="meta price">Price: ${price}</div>
                <div className="meta">Category:{category}</div>
              </div>
            </div>
          {/* </div> */}
        {/* </Link> */}
      </div>
    );
  });

  return <>{renderList}</>;
}
