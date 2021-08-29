import "../../styles/Innovators.css";
import { useRoutes } from "react-router-dom";

export default function InnovatorItem(props) {
  //let path = useRoutes();
  const { innovatorImage, innovatorID, innovatorTitle, innovatorDate, innovatorDescription } = props;

  return (
    <div className="column">
        <div class="card">
            <img src={innovatorImage}/>
            <h3 className="card-h3">{innovatorTitle}</h3>
            <p className="card-p1">{innovatorDate}</p>
            <p className="card-p2">{innovatorDescription}</p>
            <button className="button1"><a href={`innovators/innovator/${innovatorID}`}>Read more</a></button>
        </div>
      </div>
  );
}
