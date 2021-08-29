import { useState } from 'react';
export default function FeaturedProducts() {
  return (
    <section className="section-content pt-5" id="featuredProducts">
      <div className="container pt-5">
        <div className="container d-flex flex-column-reverse  align-items-center">
          <h2 className="fw-light text-uppercase text-darkblue">Featured Products</h2>
          <h5 className="fw-lighter">Browse thru our products made by our talented innovators</h5>
        </div>
        <div className="mt-4 row gy-4 row-cols-2 row-cols-md-3 row-cols-lg-4 justify-content-center">
          {featuredProducts.map((product, index) => (
            <div className="col" key={index}>
              <div className="card">
                <img src={product.productImage} className="card-img-top  vh-20" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-truncate">{product.productName}</h5>
                  <h6 className="card-subtitle mb-2 text-muted text-truncate">
                    {product.owner.join(', ')}
                  </h6>
                  {product.productPrice && (
                    <p className="card-text text-success">₱{product.productPrice}</p>
                  )}
                  <a href={`products/innovations/${product.productID}`} className="btn btn-primary">
                    View Item
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const featuredProducts = [
  {
    productID: 1,
    productName: 'Mini Spy Scope',
    productImage: 'https://i.pinimg.com/originals/29/c2/7d/29c27da1ee5176e1e4d15e0841257c71.jpg',
    productPrice: null,
    owner: ['Jonhalyn C. Go, RCh Mse', 'Edmark C. Kamintague']
  },
  {
    productID: 1,
    productName: 'Mini Spy Scope',
    productImage: 'https://i.pinimg.com/originals/29/c2/7d/29c27da1ee5176e1e4d15e0841257c71.jpg',
    productPrice: null,
    owner: ['Jonhalyn C. Go, RCh Mse', 'Edmark C. Kamintague']
  },
  {
    productID: 1,
    productName: 'Mini Spy Scope',
    productImage: 'https://i.pinimg.com/originals/29/c2/7d/29c27da1ee5176e1e4d15e0841257c71.jpg',
    productPrice: null,
    owner: ['Jonhalyn C. Go, RCh Mse', 'Edmark C. Kamintague']
  },
  {
    productID: 1,
    productName: 'Mini Spy Scope',
    productImage: 'https://i.pinimg.com/originals/29/c2/7d/29c27da1ee5176e1e4d15e0841257c71.jpg',
    productPrice: null,
    owner: ['Jonhalyn C. Go, RCh Mse', 'Edmark C. Kamintague']
  }
];
