import { useEffect, useState } from "react";
import { productData } from "../../mockdata/ProductsData";
import ProductItem from "./ProductItem";

export default function Innovations() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    setItems(
      productData
        .filter((item) => item.productType === "innovations")
        .map((item) => (
          <ProductItem
            productID={item.productID}
            productName={item.productName}
            productImage={item.productImage[0]}
            owner={item.owner}
          />
        ))
    );
  }, [setItems]);

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between">
        {items && (
          <>
            <div>
              <h2>Innovations</h2>
              <p>
                Showing {items.length} {items.length > 1 ? "results" : "result"}
              </p>
            </div>
            <div>
              <h6>Sort by</h6>
              <select className="form-select form-select-sm mb-3">
                {/* <option  value="Price Highest to Lowest">
                  Price Highest to Lowest
                </option>
                <option value="Price Lowest to Highest">
                  Price Lowest to Highest
                </option> */}
                <option selected value="Recent">
                  Recent
                </option>
                <option value="Relevance">Relevance</option>
              </select>
            </div>
          </>
        )}
      </div>

      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5">
        {items}
      </div>
    </div>
  );
}
