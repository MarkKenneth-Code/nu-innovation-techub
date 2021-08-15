import { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { innovatorsData } from "../../mockdata/InnovatorsData";
import "../../styles/Innovators.css";

export default function InnovatorDetail() {
  let path = useRouteMatch();
  const [innovatorDetail, setInnovatorDetail] = useState(null);

  useEffect(() => {
    setInnovatorDetail(
      innovatorsData.filter((item) => item.innovatorID == path.params.innovatorID)
    );
  }, [path.params.innovatorID]);


  return (
    <>
      <div className="container my-5 d-lg-flex">
        {innovatorDetail && (
          <>
            <div className="product-details d-flex flex-column justify-content-between">
              <div>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb bg-white">
                    <li className="breadcrumb-item">
                      <a
                        href="/innovators/innovator"
                        className="text-decoration-none"
                      >
                        Innovators
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {innovatorDetail[0].innovatorType}
                    </li>
                  </ol>
                </nav>
                <div>
                  {innovatorDetail[0].innovatorTitle && (
                    <h3 className="card-h2">
                      {innovatorDetail[0].innovatorTitle}
                    </h3>
                  )}
                  <h5>Date: {innovatorDetail[0].innovatorDate}</h5>
                    <img src={innovatorDetail[0].innovatorImage}/>
                  <p className="card-p2">
                    {innovatorDetail[0].innovatorDescription}
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
