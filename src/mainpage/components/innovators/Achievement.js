import "../../styles/Innovators.css";
import background from "../../assets/innovatorIMG.JPG";
import { useState, useEffect } from "react";
import { achievementsData } from "../../mockdata/AchievementsData";
import AchievementItem from "./AchievementItem";


export default function Achievement() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    setItems(
      achievementsData
        .filter((item) => item.achievementType === "achievement")
        .map((item) => (
          <AchievementItem
        achievementID={item.achievementID}
        achievementImage={item.achievementImage}
        achievementTitle={item.achievementTitle}
        achievementrDate={item.achievementDate}
        achievementDescription={item.achievementDescription}
          />
        ))
    );
  }, [setItems]);

  
    return (
    <>

      <div className = "container my-5">
      <p><span className="h2">ACHIEVEMENTS</span> <span className="h3">& STORIES</span></p>
      
        <div className="container my-5">
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5">
            {items}
          </div>
        </div>
      </div>
    </>
    );
  }


