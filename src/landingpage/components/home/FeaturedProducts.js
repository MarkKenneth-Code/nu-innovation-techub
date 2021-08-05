import { useState } from "react";
export default function FeaturedProducts() {
  const [currentIndex, setCurrentIndex] = useState(4);

  const scrollRight = () => {};

  const scrollLeft = () => {};

  return (
    <section className="section-content" id="featuredProducts">
      <div className="container py-5">
        <div className="container d-flex flex-column-reverse  align-items-center">
          <h2 className="fw-light text-uppercase text-darkblue">
            Featured Products
          </h2>
          <h5 className="fw-lighter">
            Browse thru our products made by our talented innovators
          </h5>
        </div>
        {/* <div className="container mt-4 card-carousel"></div> */}
        {/* <div className="d-flex justify-content-center chevron-control">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-chevron-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
        </div> */}
      </div>
    </section>
  );
}

const featuredProducts = [
  {
    productID: 1,
    productName: "Mini Spy Scope",
    productImage:
      "https://i.pinimg.com/originals/29/c2/7d/29c27da1ee5176e1e4d15e0841257c71.jpg",
    productPrice: null,
    owner: ["Jonhalyn C. Go, RCh Mse", "Edmark C. Kamintague"],
  },
  {
    productID: 1,
    productName: "Mini Spy Scope",
    productImage:
      "https://i.pinimg.com/originals/29/c2/7d/29c27da1ee5176e1e4d15e0841257c71.jpg",
    productPrice: null,
    owner: ["Jonhalyn C. Go, RCh Mse", "Edmark C. Kamintague"],
  },
  {
    productID: 1,
    productName: "Mini Spy Scope",
    productImage:
      "https://i.pinimg.com/originals/29/c2/7d/29c27da1ee5176e1e4d15e0841257c71.jpg",
    productPrice: null,
    owner: ["Jonhalyn C. Go, RCh Mse", "Edmark C. Kamintague"],
  },
  {
    productID: 1,
    productName: "Mini Spy Scope",
    productImage:
      "https://i.pinimg.com/originals/29/c2/7d/29c27da1ee5176e1e4d15e0841257c71.jpg",
    productPrice: null,
    owner: ["Jonhalyn C. Go, RCh Mse", "Edmark C. Kamintague"],
  },
  {
    productID: 1,
    productName: "Mini Spy Scope",
    productImage:
      "https://i.pinimg.com/originals/29/c2/7d/29c27da1ee5176e1e4d15e0841257c71.jpg",
    productPrice: null,
    owner: ["Jonhalyn C. Go, RCh Mse", "Edmark C. Kamintague"],
  },
  {
    productID: 1,
    productName: "Mini Spy Scope",
    productImage:
      "https://i.pinimg.com/originals/29/c2/7d/29c27da1ee5176e1e4d15e0841257c71.jpg",
    productPrice: null,
    owner: ["Jonhalyn C. Go, RCh Mse", "Edmark C. Kamintague"],
  },
  {
    productID: 1,
    productName: "Mini Spy Scope",
    productImage:
      "https://i.pinimg.com/originals/29/c2/7d/29c27da1ee5176e1e4d15e0841257c71.jpg",
    productPrice: null,
    owner: ["Jonhalyn C. Go, RCh Mse", "Edmark C. Kamintague"],
  },
];

function ProductItem(props) {
  const { productID, productName, productImage, productPrice, owner } = props;

  return (
    <div className="card">
      <img src={productImage} alt="" className="card-img-top" />
    </div>
  );
}

// <div className="card card-carousel-item" style={{ width: "auto" }}>
//   <img src={productImage} class="card-img-top w-100 vh-20" alt="..." />
//   <div className="card-body">
//     <h5 className="card-title text-truncate">{productName}</h5>
//     <h6 class="card-subtitle mb-2 text-muted text-truncate">
//       {owner.join(", ")}
//     </h6>
//     {productPrice && <p class="card-text text-success">₱{productPrice}</p>}
//     <a href="/" className="btn btn-primary">
//       View Item
//     </a>
//   </div>
// </div>
