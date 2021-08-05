export default function CartItem(props) {
  const { productName, productImage, productPrice } = props;

  console.log(props);
  return (
    <div className="d-flex mb-2">
      <div className="product-image rounded d-flex justify-content-center">
        <img
          src={productImage}
          className="product-image--small rounded"
          alt="product"
        />
      </div>
      <div className="product-details ps-3">
        <h6>{productName}</h6>
        <p className="text-success">₱{productPrice}</p>
      </div>
    </div>
  );
}
