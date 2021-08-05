import NavBar from "../components/shared/NavBar";
import Banner from "../components/shared/Banner";
import Footer from "../components/shared/Footer";
import { Helmet } from "react-helmet";

export default function Innovators() {
  return (
    <>
      <Helmet>
        <title>Innovators | NU TechHub</title>
      </Helmet>
      <NavBar />
      <Banner label="INNOVATORS &amp; STORIES" />
      <p>innovators</p>
      <Footer />
    </>
  );
}
