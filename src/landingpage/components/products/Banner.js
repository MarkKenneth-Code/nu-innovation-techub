import "../../styles/Banner.css";
import banner from "../../assets/Banner.png";

export default function Banner(props) {
  return (
    <div className="banner text-white">
      <img src={banner} alt="banner" className="w-100" />
      <div className="banner-label mt-3 d-flex flex-column align-items-center">
        <h1 className="fw-bold">{props.label}</h1>
        <div className="mt-3" />
        <div className="d-flex mt-4 me-3 product-links">
          <a href="/products/innovations">INNOVATIONS</a>
          <a href="/products/books">BOOKS</a>
          <a href="/products/souvenirs">SOUVENIRS</a>
        </div>
      </div>
    </div>
  );
}
