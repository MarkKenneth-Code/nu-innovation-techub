import Banner from '../components/home/Banner';
import NavBar from '../components/shared/NavBar';
import Footer from '../components/shared/Footer';
import LatestStories from '../components/home/LatestStories';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Exhibits from '../components/home/Exhibits';
import VisitorsToBuyers from '../components/home/VisitorsToBuyers';
import InquireNow from '../components/home/InquireNow';
import FeaturedInnovators from '../components/home/FeaturedInnovators';

export default function Home() {
  return (
    <>
      <NavBar />
      <Banner />
      <div className="sections-navigation">
        <div className="container d-flex justify-content-between py-3">
          <a href="#featuredInnovators">FEATURED INNOVATORS</a>
          <a href="#latestStories">LATEST STORIES</a>
          <a href="#featuredProducts">FEATURED PRODUCTS</a>
          <a href="#exhibits">EXHIBITS</a>
          <a href="#inquireNow">INQUIRE NOW</a>
        </div>
      </div>
      <FeaturedInnovators />
      <LatestStories />
      <FeaturedProducts />
      <Exhibits />
      <VisitorsToBuyers />
      <InquireNow />
      <Footer />
    </>
  );
}
