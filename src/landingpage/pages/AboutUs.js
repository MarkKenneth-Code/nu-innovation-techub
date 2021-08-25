import NavBar from '../components/shared/NavBar';
import Banner from '../components/shared/Banner';
import Footer from '../components/shared/Footer';
import { Helmet } from 'react-helmet';
import '../styles/AboutUs.css';

export default function AboutUs() {
  return (
    <>
      <Helmet>
        <title>About Us | NU TechHub</title>
      </Helmet>
      <NavBar />
      <Banner label="ABOUT US" />
      <div className="container my-5">
        <div className="row">
          <div className="column">
            <img
              src="https://dr93qnyg6oltl.cloudfront.net/wp-content/uploads/2018/11/15173932/Screen-Shot-2018-11-15-at-19.39.06.jpg"
              alt=""
            />
          </div>
          <div className="column">
            <img
              src="https://s3-ap-southeast-1.amazonaws.com/blog-edukasyon/wp-content/uploads/2019/02/28170348/NU-fast-facts.jpg"
              alt=""
            />
          </div>
        </div>
        <div>
          <div className="row">
            <div className="column2">
              <h2 className="h2">NU Innovation Tech-Hub</h2>
              <p className="p1">Center for Innovation & Intrepreneurship</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat volutpat
                volutpat a urna, bibendum viverra tincidunt. Vulputate amet mattis integer in
                laoreet lorem nunc nunc, amet. A phasellus nisi at neque, sagittis, nibh proin.
                Pharetra diam aliquet odio auctor leo amet sit id eget.{' '}
              </p>
            </div>
            <div className="column2">
              <img
                src="https://pbs.twimg.com/profile_images/921210981019090944/zP6W5Ac5.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="card card-mvc">
          <div className="container2">
            <h4>
              <b>Mission</b>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat volutpat
              volutpat a urna, bibendum viverra tincidunt. Vulputate amet mattis integer in laoreet
              lorem nunc nunc, amet. A phasellus nisi at neque, sagittis, nibh proin. Pharetra diam
              aliquet odio auctor leo amet sit id eget.
            </p>
          </div>
        </div>
        <div className="card card-mvc">
          <div className="container2">
            <h4>
              <b>Vision</b>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat volutpat
              volutpat a urna, bibendum viverra tincidunt. Vulputate amet mattis integer in laoreet
              lorem nunc nunc, amet. A phasellus nisi at neque, sagittis, nibh proin. Pharetra diam
              aliquet odio auctor leo amet sit id eget.
            </p>
          </div>
        </div>
        <div className="card card-mvc">
          <div className="container2">
            <h4>
              <b>Core Values</b>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat volutpat
              volutpat a urna, bibendum viverra tincidunt. Vulputate amet mattis integer in laoreet
              lorem nunc nunc, amet. A phasellus nisi at neque, sagittis, nibh proin. Pharetra diam
              aliquet odio auctor leo amet sit id eget.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
