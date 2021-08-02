import NavBar from "../components/shared/NavBar";
import Banner from "../components/shared/Banner";
import Footer from "../components/shared/Footer";
import { Helmet } from "react-helmet";

export default function ContactUs() {
  return (
    <>
      <Helmet>
        <title>Contact Us | NU TechHub</title>
      </Helmet>
      <NavBar />
      <Banner label="CONTACT US" />
      <p>contact us</p>
      <Footer />
    </>
  );
}
