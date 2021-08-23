import NavBar from "../components/shared/NavBar";
import Banner from "../components/innovators/Banner";
import Footer from "../components/shared/Footer";
import { Helmet } from "react-helmet";
import "../styles/Innovators.css";
import background from "../assets/innovatorIMG.JPG";
import innov1 from "../assets/innov1.png";
import innov2 from "../assets/innov2.png";
import innov3 from "../assets/innov3.png";
import achieve1 from "../assets/achieve1.png";
import achieve2 from "../assets/achieve2.png";
import achieve3 from "../assets/achieve3.png";
import {Route, Switch, useRouteMatch } from "react-router-dom";
import Innovator from "../components/innovators/Innovator";
import Achievement from "../components/innovators/Achievement";
import InnovatorDetail from "../components/innovators/InnovatorDetail";
import AchievementDetail from "../components/innovators/AchievementDetail";

export default function Innovators() {
  //let { path } = useRouteMatch();

  return (
    <>
      <Helmet>
        <title>Innovators | NU TechHub</title>
      </Helmet>
      <NavBar />
      <Banner label="INNOVATORS &amp; STORIES" />  

        <Route path={`innovators/innovator`} component={Innovator} exact />
        {/*<Route path={`${path}/achievement`} component={Achievement} exact />
        
        <Route path={`${path}/innovator/:innovatorID`} component={InnovatorDetail} />
  <Route path={`${path}/achievement/:achievementID`} component={AchievementDetail} />*/}

      <Footer />
    </>
  );
}

/*<div className = "container my-5">
<p><span className="h2">ACHIEVEMENTS</span> <span className="h3">& STORIES</span></p>
<div className="container my-5">
  <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5">
  {items2}
  </div>
</div>
</div>*/

/*useEffect(() => {
  setItems2(
    achievementsData
      .filter((item) => item.achievementType === "achievement")
      .map((item) => (
        <AchievementItem
        achievementID={item.achievementID}
        achievementImage={item.achievementImage}
        achievementTitle={item.achievementTitle}
        achievementDate={item.achievementDate}
        achievementDescription={item.achievementDescription}
        />
      ))
  );
}, [setItems2]);*/


/*<div className="container">
<img src={background} />
</div>

<div className = "container my-5">
<p><span className="h2">FEATURED</span> <span className="h3">INNOVATORS</span></p>

<div class="row">
<div class="column">
  <div class="card">
  <img src={innov1}/>
    <h3 className="card-h3">{innovatorTitle}</h3>
    <p className="card-p1">June 04, 2021</p>
    <p className="card-p2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis non amet aliquet dolor. Sed ac massa semper massa tristique aliquet quis id at. At mattis ultrices semper consectetur convallis. Lobortis diam tristique leo ultrices dolor fermentum, sit leo.</p>
    <button className="button1"><a href="ContactUs">Read more</a></button>
  </div>
</div>

<div class="column">
  <div class="card">
  <img src={innov2}/>
    <h3 className="card-h3">Artificial Technology and Robotics of the Modern Age</h3>
    <p className="card-p1">June 02, 2021</p>
    <p className="card-p2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis non amet aliquet dolor. Sed ac massa semper massa tristique aliquet quis id at. At mattis ultrices semper consectetur convallis. Lobortis diam tristique leo ultrices dolor fermentum, sit leo.</p>
    <button className="button1">Read more</button>
  </div>
</div>

<div class="column">
  <div class="card">
  <img src={innov3}/>
    <h3 className="card-h3">The man behind of Electrical fixation of atmospheric nit...</h3>
    <p className="card-p1">May 29, 2021</p>
    <p className="card-p2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis non amet aliquet dolor. Sed ac massa semper massa tristique aliquet quis id at. At mattis ultrices semper consectetur convallis. Lobortis diam tristique leo ultrices dolor fermentum, sit leo.</p>
    <button className="button1">Read more</button>
  </div>
</div>
</div>

<div className = "container my-3">
<center><button className="button">View more Innovators →</button></center>
</div>
</div>

<div className = "container my-5">
<p><span className="h2">ACHIEVEMENTS</span> <span className="h3">& STORIES</span></p>
<div class="row">
<div class="column">
  <div class="card">
  <img src={achieve1}/>
    <h3 className="card-h3">Congratulations new NU Mechanical Engineers!</h3>
    <p className="card-p1">June 05, 2021</p>
    <p className="card-p2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis non amet aliquet dolor. Sed ac massa semper massa tristique aliquet quis id at. At mattis ultrices semper consectetur convallis. Lobortis diam tristique leo ultrices dolor fermentum, sit leo.</p>
    <button className="button1">Read more</button>
  </div>
</div>

<div class="column">
  <div class="card">
  <img src={achieve2}/>
    <h3 className="card-h3">Congratulations new NU Sanitary Engineers!</h3>
    <p className="card-p1">June 04, 2021</p>
    <p className="card-p2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis non amet aliquet dolor. Sed ac massa semper massa tristique aliquet quis id at. At mattis ultrices semper consectetur convallis. Lobortis diam tristique leo ultrices dolor fermentum, sit leo.</p>
    <button className="button1">Read more</button>
  </div>
</div>

<div class="column">
  <div class="card">
  <img src={achieve3}/>
    <h3 className="card-h3">Congratulations to COE Cum Laudes!</h3>
    <p className="card-p1">June 03, 2021</p>
    <p className="card-p2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis non amet aliquet dolor. Sed ac massa semper massa tristique aliquet quis id at. At mattis ultrices semper consectetur convallis. Lobortis diam tristique leo ultrices dolor fermentum, sit leo.</p>
    <button className="button1">Read more</button>
  </div>
</div>
</div>

<div className = "container my-3">
<center><button className="button">View more stories →</button></center>
</div>
</div>*/


