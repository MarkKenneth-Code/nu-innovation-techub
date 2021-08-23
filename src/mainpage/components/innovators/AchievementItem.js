import "../../styles/Innovators.css";
import { useRoutes } from "react-router-dom";

export default function AchievementItem(props) {
  //let path = useRoutes();
  const { achievementImage, achievementID, achievementTitle, achievementDate, achievementDescription } = props;

  return (
    <div className="column">
        <div class="card">
            <img src={achievementImage}/>
            <h3 className="card-h3">{achievementTitle}</h3>
            <p className="card-p1">{achievementDate}</p>
            <p className="card-p2">{achievementDescription}</p>
            <button className="button1"><a href={`innovators/achievement/${achievementID}`}>Read more</a></button>
        </div>
      </div>
  );
}
