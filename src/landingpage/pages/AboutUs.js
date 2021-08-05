import NavBar from "../components/shared/NavBar";
import Banner from "../components/shared/Banner";
import Footer from "../components/shared/Footer";
import { Helmet } from "react-helmet";
export default function AboutUs() {
  return (
    <>
      <Helmet>
        <title>About Us | NU TechHub</title>
      </Helmet>
      <NavBar />
      <Banner label="ABOUT US" />
      <p>about us</p>
      <Footer />
    </>
  );
}
