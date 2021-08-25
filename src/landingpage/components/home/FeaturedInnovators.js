import { useState, useEffect } from 'react';

export default function FeaturedInnovators() {
  const [innovators, setInnovators] = useState(null);
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    setInnovators(innovatorsList);
  }, []);

  const change = (b) => {
    setCurrent(b);
  };

  return (
    <section className="section-content " id="featuredInnovators">
      <div className="pb-5 overflow-hidden">
        <div className="triangle-top-left" />
        <div className="triangle-top-right" />
      </div>
      <div className="container pt-5">
        <div className="container d-flex flex-column-reverse  align-items-center mb-5">
          <h2 className="fw-light text-uppercase text-darkblue">Featured Innovators</h2>
          <h5 className="fw-lighter text-center">
            World-class innovators from National University - Manila
          </h5>
        </div>
      </div>
      <div className="container">
        {innovators && (
          <div className="d-flex">
            <div className="innovator-details px-md-5 d-flex justify-content-center flex-column">
              <h3 className="fw-bold">{innovators[current].title}</h3>
              <h5 className="fw-light">{innovators[current].description}</h5>
              <h4 className="fw-bold text-center mt-3">{innovators[current].innovator}</h4>
              <h6 className="text-center">Top Innovator</h6>
              <p className="text-center">CCIT</p>
            </div>
            <div className="innovator-img">
              <img className="img-fluid" src={innovators[current].image} alt="" />
            </div>
          </div>
        )}

        <div className="d-flex justify-content-center mt-3">
          <div className="innovators-button" onClick={() => change(0)} />
          <div className="innovators-button innovators-button-middle" onClick={() => change(1)} />
          <div className="innovators-button" onClick={() => change(2)} />
        </div>
      </div>

      <div className="pb-5 pt-3">
        <div className="triangle-bottom-left" />
        <div className="triangle-bottom-right" />
      </div>
    </section>
  );
}

const innovatorsList = [
  {
    id: 0,
    title: 'The Exemplary Innovator',
    image: 'https://thebowdoinharpoondotcom.files.wordpress.com/2016/12/00-professor2.jpg',
    description:
      '"Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution."',
    innovator: 'Dr. Ria Canlas'
  },
  {
    id: 1,
    title: 'The Artistic Innovator',
    image: 'https://thebowdoinharpoondotcom.files.wordpress.com/2016/12/00-professor2.jpg',
    description:
      '"Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution."',
    innovator: 'Dr. Mideth Abisado'
  },
  {
    id: 2,
    title: 'The Revolutionary Innovator',
    image: 'https://thebowdoinharpoondotcom.files.wordpress.com/2016/12/00-professor2.jpg',
    description:
      '"Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution."',
    innovator: 'Dr. Angelique Lacasandile'
  }
];
