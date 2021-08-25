import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import Footer from '../shared/Footer';
import NavBar from '../shared/NavBar';
import Banner from './Banner';

export default function ProductDetail() {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState(null);
  const [imageHeader, setImageHeader] = useState(null);

  useEffect(() => {
    console.log(id);
    setProductDetail(productData.filter((item) => item.productID == id));
  }, [id]);

  const setHeader = (image) => {
    setImageHeader(image);
  };

  return (
    <>
      <NavBar />
      {/* <Banner label="PRODUCTS" /> */}
      <div className="container my-5 d-lg-flex">
        {productDetail && (
          <>
            <div className="product-image-center px-4 mb-2">
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
      <Footer />
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

export const productData = [
  {
    productID: 1,
    productName: 'Mini Spy Scope',
    productImage: [
      'https://i.pinimg.com/originals/29/c2/7d/29c27da1ee5176e1e4d15e0841257c71.jpg',
      'https://images-na.ssl-images-amazon.com/images/I/41%2BgoCr6jUL.jpg',
      'https://cdn.goodao.net/besttrustbags/HTB1glVdxcuYBuNkSmRyq6AA3pXaiPlastic-Mono-Spy-Spotting-Scope-30X50-Classic.jpg',
      'https://cdn.goodao.net/besttrustbags/HTB1glVdxcuYBuNkSmRyq6AA3pXaiPlastic-Mono-Spy-Spotting-Scope-30X50-Classic.jpg'
    ],
    productPrice: null,
    productQuantity: '5',
    owner: ['Jonhalyn C. Go, RCh Mse', 'Edmark C. Kamintague'],
    productDetails:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus gravida sed tempor vitae pretium, dictum scelerisque sem. Leo risus odio nisl quis vitae. Pellentesque in mattis sed eu urna. Nunc leo suspendisse suspendisse mattis ac non orci. Tristique risus quisque elit tincidunt pellentesque ultrices tortor. Nunc, porta facilisi morbi vulputate pretium sed nulla. Libero id scelerisque vulputate sed varius venenatis diam arcu suspendisse. Pellentesque ultricies a posuere vitae eget euismod posuere quis. Pellentesque sapien nulla eget faucibus vulputate ac turpis proin sollicitudin. Pharetra non porttitor tellus euismod odio rutrum lobortis. ',
    productType: 'innovations'
  },
  {
    productID: 2,
    productName: 'Fundamentals of Anatomy and Physiology',
    productImage: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsnsrXBkBAQrqu3WbztsomflEq93eJJDj-6EZ6S04tEM9TKY4xOU79u885fOtdha8VyNc&usqp=CAU',
      'https://1.bp.blogspot.com/-eh-2QwYXlyM/YD0WnYtP64I/AAAAAAAAATE/lGhiO9eea1EceAhQ4zASVjnNUovUej5JwCLcBGAsYHQ/s499/hap1.jpg',
      'https://b6t4d8w4.rocketcdn.me/wp-content/uploads/2019/09/Guyton-and-Hall-Textbook-of-Medical-Physiology-13th-Edition-PDF.jpg',
      'https://static.kopykitab.com/image/cache/data/nirali-prakashan/nir1430-300x380.jpg'
    ],
    productPrice: '150.00',
    productQuantity: '6',
    owner: ['Donald C. Rizzo'],
    productDetails:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus gravida sed tempor vitae pretium, dictum scelerisque sem. Leo risus odio nisl quis vitae. Pellentesque in mattis sed eu urna. Nunc leo suspendisse suspendisse mattis ac non orci. Tristique risus quisque elit tincidunt pellentesque ultrices tortor. Nunc, porta facilisi morbi vulputate pretium sed nulla. Libero id scelerisque vulputate sed varius venenatis diam arcu suspendisse. Pellentesque ultricies a posuere vitae eget euismod posuere quis.  ',
    productType: 'books'
  },
  {
    productID: 3,
    productName: 'NU Jersey',
    productImage: [
      'https://media.karousell.com/media/photos/products/2021/6/3/uaap_nu_bulldogs_issa_gaye_jer_1622709071_2abe7728_progressive.jpg',
      'https://media.karousell.com/media/photos/products/2021/6/11/uaap_nu_bulldogs_basketball_sh_1623395525_d70d90cf_progressive_thumbnail.jpg',
      'https://media.karousell.com/media/photos/products/2021/6/3/uaap_nu_bulldogs_issa_gaye_jer_1622709071_2abe7728_progressive.jpg',
      'https://media.karousell.com/media/photos/products/2021/6/11/uaap_nu_bulldogs_basketball_sh_1623395525_d70d90cf_progressive_thumbnail.jpg'
    ],
    productPrice: '200.00',
    productQuantity: '6',
    owner: ['NU Bulldogs Exchange'],
    productDetails:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus gravida sed tempor vitae pretium, dictum scelerisque sem. Leo risus odio nisl quis vitae. Pellentesque in mattis sed eu urna. Nunc leo suspendisse suspendisse mattis ac non orci. Tristique risus quisque elit tincidunt pellentesque ultrices tortor. Nunc, porta facilisi morbi vulputate pretium sed nulla. Libero id scelerisque vulputate sed varius venenatis diam arcu suspendisse. Pellentesque ultricies a posuere vitae eget euismod posuere quis.  ',
    productType: 'souvenirs'
  }
];
