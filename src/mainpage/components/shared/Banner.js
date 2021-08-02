import banner from "../../assets/Banner.png";
import "../../styles/Banner.css";

export default function Banner(props) {
  return (
    <div className="banner text-white">
      <img src={banner} alt="banner" className="w-100" />
      <div className="banner-label d-flex flex-column align-items-center">
        <h1 className="fw-bold">{props.label}</h1>
        <div className="mt-3" />
      </div>
    </div>
  );
}
