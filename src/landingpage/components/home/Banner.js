import banner from "../../assets/Home-Banner.png";
import NULogo from "../../assets/NU-Logo-home.png";
import "../../styles/Home.css";
export default function Banner() {
  return (
    <div className="banner">
      <img src={banner} alt="" />
      <div className="banner-label">
        {/* <img src={NULogo} alt="" /> */}
        {/* <h1>National-U Innovation Tech Hub</h1>
        <p>Center for Innovation &amp; Entrepreneurship</p> */}
      </div>
    </div>
  );
}
