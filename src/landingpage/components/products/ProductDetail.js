import { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { productData } from '../../mockdata/ProductsData';

export default function ProductDetail() {
  let path = useRoutes();
  const [productDetail, setProductDetail] = useState(null);
  const [imageHeader, setImageHeader] = useState(null);

  useEffect(() => {
    setProductDetail(productData.filter((item) => item.productID == path.params.productID));
  }, [path.params.productID]);

  const setHeader = (image) => {
    setImageHeader(image);
  };

  return (
    <>
      <div className="container my-5 d-lg-flex">
        {productDetail && (
          <>
            <div className="product-image px-4 mb-2">
              <div className="d-flex flex-column">
                <div className="shadow-sm mb-3">
                  <img
                    src={imageHeader ? imageHeader : productDetail[0].productImage[0]}
                    className="img-fluid h-auto w-100 rounded product-image-header"
                    alt="product"
                  />
                </div>
                <div className="row row-cols-4 px-3 product-image-row">
                  <div
                    className="col shadow-sm bg-light "
                    onClick={() => setHeader(productDetail[0].productImage[0])}
                  >
                    <img
                      src={productDetail[0].productImage[0]}
                      alt="product-1"
                      className="img-fluid rounded"
                    />
                  </div>
                  {productDetail[0].productImage[1] !== undefined && (
                    <div
                      className="col shadow-sm bg-light"
                      onClick={() => setHeader(productDetail[0].productImage[1])}
                    >
                      <img
                        src={productDetail[0].productImage[1]}
                        alt="product-1"
                        className="img-fluid rounded"
                      />
                    </div>
                  )}
                  {productDetail[0].productImage[2] !== undefined && (
                    <div
                      className="col shadow-sm bg-light"
                      onClick={() => setHeader(productDetail[0].productImage[2])}
                    >
                      <img
                        src={productDetail[0].productImage[2]}
                        alt="product-1"
                        className="img-fluid rounded"
                      />
                    </div>
                  )}
                  {productDetail[0].productImage[3] !== undefined && (
                    <div
                      className="col shadow-sm bg-light"
                      onClick={() => setHeader(productDetail[0].productImage[3])}
                    >
                      <img
                        src={productDetail[0].productImage[3]}
                        alt="product-1"
                        className="img-fluid rounded"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="product-details d-flex flex-column justify-content-between">
              <div>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb bg-white">
                    <li className="breadcrumb-item">
                      <a href="/products/innovations" className="text-decoration-none">
                        Products
                      </a>
                    </li>
                    <li class="breadcrumb-item">
                      <a
                        href={`/products/${productDetail[0].productType}`}
                        className="text-decoration-none"
                      >
                        <span className="text-capitalize">{productDetail[0].productType}</span>
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {productDetail[0].productName}
                    </li>
                  </ol>
                </nav>
                <div className="pl-3">
                  <h2>{productDetail[0].productName}</h2>
                  {productDetail[0].productPrice && (
                    <h3 className="text-success">₱{productDetail[0].productPrice}</h3>
                  )}
                  <h5>Quantity: {productDetail[0].productQuantity}</h5>
                  <h6 className="font-weight-normal">
                    {getOwnership(productDetail[0].productType)}:{' '}
                    {productDetail[0].owner.join(', ')}
                  </h6>
                  <p className="text-muted font-weight-light">{productDetail[0].productDetails}</p>
                </div>
              </div>
              <div className="align-self-end">
                <button type="button" className="btn btn-outline-warning btn-lg">
                  Add to Cart
                </button>
                <button type="button" className="btn btn-primary btn-lg ms-2">
                  {productDetail[0].productType === 'innovation' ? 'Contact Innovator' : 'Buy Now'}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

function getOwnership(productType) {
  switch (productType) {
    case 'innovations':
      return 'Innovator/s';
    case 'books':
      return 'Author/s';
    case 'souvenirs':
      return 'Seller';
    default:
      return 'owner';
  }
}
