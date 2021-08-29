import NavBar from "../components/shared/NavBar";
import Banner from "../components/shared/Banner";
import Footer from "../components/shared/Footer";
import { Helmet } from "react-helmet";
import "../styles/ContactUs.css";
import visit from "../assets/VisitUs.png";
import phone from "../assets/CallUs.png";
import mail from "../assets/EmailUs.png";
import map from "../assets/NUmap.png";

export default function ContactUs() {
  return (
    <>
      <Helmet>
        <title>Contact Us | NU TechHub</title>
      </Helmet>
      <NavBar />
      <Banner label="CONTACT US" />
      <div className = "container my-5">
      <div className="row">
        <div className="column">
          <div className="card">
          <img src={visit}/>
            <h3>VISIT US</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque morbi venenatis duis venenatis eu donec leo.</p>
            <p className="p2">National University-Manila, M.F. Jhocson Street, Sampaloc, Manila</p>
          </div>
        </div>

        <div className="column">
          <div className="card">
          <img src={phone}/>
            <h3>CALL US</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque morbi venenatis duis venenatis eu donec leo.</p>
            <p className="p2">+ (02) 8712 1900</p>
          </div>
        </div>
  
        <div className="column">
          <div className="card">
          <img src={mail}/>
            <h3>EMAIL US</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque morbi venenatis duis venenatis eu donec leo.</p>
            <p className="p2">nutechhub@gmail.com</p>
          </div>
        </div>
      </div>
      </div>
      <div className="map">
        <img src={map}/>
      </div>
      <Footer />
    </>
  );
}
