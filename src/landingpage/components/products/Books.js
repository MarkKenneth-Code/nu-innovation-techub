import { useEffect, useState } from "react";
import { productData } from "../../mockdata/ProductsData";
import ProductItem from "./ProductItem";

export default function Books() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    setItems(
      productData
        .filter((item) => item.productType === "books")
        .map((item) => (
          <ProductItem
            productID={item.productID}
            productName={item.productName}
            productImage={item.productImage[0]}
            productPrice={item.productPrice}
            owner={item.owner}
          />
        ))
    );
  }, [setItems]);

  return (
    items && (
      <div className="container my-5">
        <div className="d-sm-flex justify-content-between">
          <>
            <div>
              <h2>Books</h2>
              <p>
                Showing {items.length} {items.length > 1 ? "results" : "result"}
              </p>
            </div>
            {/* Filter */}
            <div className="d-flex">
              <div>
                <h6>Sort by</h6>
                <select className="form-select form-select-sm mb-3">
                  <option selected value="Price Highest to Lowest">
                    Price Highest to Lowest
                  </option>
                  <option value="Price Lowest to Highest">
                    Price Lowest to Highest
                  </option>
                  <option value="Recent">Recent</option>
                  <option value="Relevance">Relevance</option>
                </select>
              </div>
              <div className="ms-2">
                <h6>Field</h6>
                <select className="form-select form-select-sm mb-3">
                  <option selected value="All">
                    All
                  </option>
                  <option value="Science">Science</option>
                  <option value="Medical">Medical</option>
                  <option value="Economics">Economics</option>
                  <option value="Engineering">Engineering</option>
                </select>
              </div>
            </div>
          </>
        </div>
        {/* product items */}
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5">
          {items}
        </div>
      </div>
    )
  );
}
