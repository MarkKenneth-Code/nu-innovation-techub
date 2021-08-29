import "../../styles/Innovators.css";
import background from "../../assets/innovatorIMG.JPG";
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
    <div className="container">
      <img src={background} />
    </div>

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


