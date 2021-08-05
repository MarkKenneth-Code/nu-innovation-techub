import { Carousel } from "react-bootstrap";

export default function Exhibits() {
  return (
    <section className="section-content" id="exhibits">
      <div className="container py-5">
        <div className="container d-flex flex-column-reverse  align-items-center mb-5">
          <h2 className="fw-light text-uppercase text-darkblue">Exhibits</h2>
          <h5 className="fw-lighter">
            Tech Expo, Trade Fairs, &amp; Conferences
          </h5>
        </div>
        <Carousel fade>
          {exhibits.map((exhibit) => (
            <Carousel.Item>
              <img
                src={exhibit.exhibitImage}
                className="d-block w-100 rounded exhibit-image"
                alt=""
              />
              <Carousel.Caption>
                <div className=" py-3 exhibit-info">
                  <h3>{exhibit.exhibitLocation}</h3>
                  <h6 className="fw-light">{exhibit.exhibitDescription}</h6>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

const exhibits = [
  {
    exhibitImage:
      "https://mms.businesswire.com/media/20171102006481/en/622309/5/GOPR7988v3.jpg",
    exhibitLocation: "Marine Tech Expo 2021",
    exhibitDescription: "June 07, 2021, National University, Manila",
  },
  {
    exhibitImage:
      "https://digitalagencynetwork.com/wp-content/uploads/2020/01/iot-tech-expo-europe-inpage-2020.jpg",
    exhibitLocation: "NU Tech Expo 2021",
    exhibitDescription: "June 08, 2021, National University, Manila",
  },
  {
    exhibitImage:
      "https://interregtiger.com/ctrl/wp-content/uploads/2020/05/Marine-Tech-Expo-2019.jpg",
    exhibitLocation: "Tech Expo 2021",
    exhibitDescription: "June 09, 2021, National University, Manila",
  },
];
