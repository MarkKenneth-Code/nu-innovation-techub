import NavBar from "../components/shared/NavBar";
import Banner from "../components/shared/Banner";
import Footer from "../components/shared/Footer";
import { Helmet } from "react-helmet";
export default function Exhibit() {
  return (
    <>
      <Helmet>
        <title>Exhibit | NU TechHub</title>
      </Helmet>
      <NavBar />

      <p>about us</p>
      <Footer />
    </>
  );
}
