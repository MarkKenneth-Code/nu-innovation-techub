import "../../styles/Innovators.css";
import background from "../../assets/innovatorIMG.JPG";
import picture from "../../assets/emily.JPG";
import { useState, useEffect } from "react";
import { innovatorsData } from "../../mockdata/InnovatorsData";
import InnovatorItem from "./InnovatorItem";

export default function Innovator() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    setItems(
      innovatorsData
        .filter((item) => item.innovatorType === "innovator")
        .map((item) => (
          <InnovatorItem
          innovatorID={item.innovatorID}
          innovatorImage={item.innovatorImage}
          innovatorTitle={item.innovatorTitle}
          innovatorDate={item.innovatorDate}
          innovatorDescription={item.innovatorDescription}
          />
        ))
    );
  }, [setItems]);
  
    return (
    <>
    <section className="section-content-inquire">
      <div className="container py-5 ">
        <div className="container d-flex flex-column-reverse  align-items-center">
          <h2 className="fw-bold text-uppercase text-gold">The Innovator of the Year</h2>
          <img src={picture} />
        </div>
        <div className="d-flex mt-10 px-10">
          <p className="quote">
            "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution"
          </p>
        </div>
        <p className="name">Emeliza R. Yabut</p>
        <p className="title">Innovator of the Year</p>
        <p className="year">2020</p>
      </div>
    </section>


      <div className = "container my-5">
        <p><span className="h2">FEATURED</span> <span className="h3">INNOVATORS</span></p>
      
        <div className="container my-5">
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5">
            {items}
          </div>
        </div>
      </div>
    </>
    );
  }


