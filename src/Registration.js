import arrow from "./icons/arrowlefttwo.svg";
import image from "./assets/registrationOne.PNG";
import { useNavigate } from "react-router-dom";

function Registration() {
const navigate = useNavigate();

function SignUpPage() {
    return ( 
    navigate("/CreateAccount")
    );
}
function LoginPage() {
    return ( 
    navigate("/Login")
    );
}
function backPage() {
    return ( 
    navigate("/Onboarding")
    );
}
  return (
    <>
      <img  onClick={backPage} className="arrowback" src={arrow} alt="arrowback" />
      <div
        style={{ height: "5px",width:"100%", transition: "0.5s ease" }}
        className="progress my-2"
        id="progressBar"
      >
        <div
          className="progress-bar bg-primary"
          role="progressbar"
          style={{ width: "8%", height: "5px" }}
          aria-valuenow="8"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <center>
        <img className="registerImage" src={image} alt="register" />
        <h1 className="createtext">Create your Coinpay account</h1>
        <p className="createsubtext">
          Coinpay is a powerful tool that allows you to easily send, receive,
          and track all your transactions
        </p>
        <button onClick={SignUpPage} id="registerButton" className="btn btn-primary btn-lg">
          Sign Up
        </button>
        <br />
        <button onClick={LoginPage} id="registerButton" className="btn btn-outline-primary btn-lg">
          Log In
        </button>
        <p className="terms">By continuing you accept our
          <span className="termssubtext"> Terms of Service </span>and
          <span className="termssubtext">Privacy Policy</span>
        </p>
      </center>
    </>
  );
}

export default Registration;
