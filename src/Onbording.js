import image1 from "./assets/onboardingOne.png";
import image2 from "./assets/onboardingTwo.png";
import image3 from "./assets/onboardingThree.png";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function Onbording() {
  const navigate = useNavigate();

function NextPage() {
  return ( 
    navigate("/Registration")
   );
}

  return (
    <>
      <center>
      <div className="slider">
        <Carousel infinite="true" className="skill-slider  carousel-fade">
          <div className="carousel-item">
            <img src={image1} className="slider-img" alt="" />
            <h1 className="sliderText">Trusted by millions of people, part of one part.</h1>
          </div>
          <div className="carousel-item">
            <img src={image2} className="slider-img" alt="" />
            <h1 className="sliderText">Spend money abroad, and track your expense.</h1>
          </div>
          <div className="carousel-item">
            <img src={image3} className="slider-img" alt="" />
            <h1 className="sliderText">Receive money from anywhere in the world.</h1>
          </div>
        </Carousel>
      </div>
      <button onClick={NextPage} id="onboardButton" className="btn btn-lg">Next</button>
      </center>
    </>
  );
}

export default Onbording;
