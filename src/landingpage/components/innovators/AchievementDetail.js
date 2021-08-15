import { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { achievementsData } from "../../mockdata/AchievementsData";
import "../../styles/Innovators.css";

export default function AchievementDetail() {
  let path = useRouteMatch();
  const [achievementDetail, setAchievementDetail] = useState(null);

  useEffect(() => {
    setAchievementDetail(
      achievementsData.filter((item) => item.achievementID == path.params.achievementID)
    );
  }, [path.params.achievementID]);


  return (
    <>
      <div className="container my-5 d-lg-flex">
        {achievementDetail && (
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
                      {achievementDetail[0].achievementType}
                    </li>
                  </ol>
                </nav>
                <div>
                  {achievementDetail[0].achievementTitle && (
                    <h3 className="card-h2">
                      {achievementDetail[0].achievementTitle}
                    </h3>
                  )}
                  <h5>Date: {achievementDetail[0].achievementDate}</h5>
                    <img src={achievementDetail[0].achievementImage}/>
                  <p className="card-p2">
                    {achievementDetail[0].achievementDescription}
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
