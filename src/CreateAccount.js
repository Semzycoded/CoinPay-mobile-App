import arrow from "./icons/arrowlefttwo.svg";
import PasswordInput from "./passwordVisibility";
import CountryCodeInput from "./CountryCodeInput";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import register2 from "./assets/registrationTwo.PNG"
import cancel from "./icons/cancel.svg"


function CreateAccount({input, setInput, newInput, setNewInput}) {
const navigate = useNavigate();
const [verify, setVerify] = useState("normal")
const [phoneNumber, setPhoneNumber] = useState('');
const [password, setPassword] = useState('');
const isButtonDisabled=!(phoneNumber.length === 10 || phoneNumber.length === 11 || password.length === 12)

const buttonStyle = {
    cursor:isButtonDisabled ?"not-allowed":"pointer",
    backgroundColor:isButtonDisabled?"rgb(0, 0, 0 , 0.2)":"blue",
    color:isButtonDisabled?"gray":"white",
    border:"none",
    transition:"background-color 0.3s",
}


function backPage() {
    return ( 
    navigate("/Registration")
    );
}
function nextPage() {
    return ( 
    navigate("/VerifyNumber")
    );
}
const handleSubmit = () => {
    // event.preventDefault();
    const NewTodoObj = {
      title: newInput,
      id: input.length + 1,
      isComplete: false,
    };
      setInput(input.concat(NewTodoObj));
      setNewInput("");
  };

  const handleOTP = () =>{
      handleSubmit();
      setVerify("display")
  }
    return ( 
        <>
        {
            verify === "normal"?<div><div>
            <img onClick={backPage} className="arrowback" src={arrow} alt="arrowback"/>
                <div style={{height:"5px",width:"100%", transition:"0.5s ease"}} className="progress my-2">
                <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        style={{width:"10%",height:"5px"}}
                        aria-valuenow="10"
                        aria-valuemin="0"
                        aria-valuemax="100"></div>
                </div>
                <div className="createDiv">
                    <h1>Create an Account</h1>
                    <p style={{fontSize:"15px"}}>Enter your mobile number to verify your account</p>
                    <h5 className="mt-4">Phone</h5>
                    <CountryCodeInput setNewInput={setNewInput} phoneNumber={phoneNumber}  setPhoneNumber={setPhoneNumber}/>
                    <h5 className="mt-3">Password</h5>
                    <PasswordInput  password={password} setPassword={setPassword}/>
                    <button id="signUpButton" style={buttonStyle} disabled={isButtonDisabled} className={`button ${isButtonDisabled ? 'disabled' : 'enabled'}`} onClick={handleOTP}>Sign Up</button>
                </div>
            </div></div>:<div><div>
            <img onClick={backPage} className="arrowback" src={arrow} alt="arrowback"/>
                <div style={{height:"5px", transition:"0.5s ease"}} className="progress my-2">
                <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        style={{width:"10%",height:"5px"}}
                        aria-valuenow="10"
                        aria-valuemin="0"
                        aria-valuemax="100"></div>
                </div>
                <div className="createDiv">
                    <h1>Create an Account</h1>
                    <p style={{fontSize:"15px"}}>Enter your mobile number to verify your acoount</p>
                    <h5 className="mt-4">Phone</h5>
                    <CountryCodeInput setNewInput={setNewInput} phoneNumber={phoneNumber}  setPhoneNumber={setPhoneNumber}/>
                    <h5 className="mt-3">Password</h5>
                    <PasswordInput  password={password} setPassword={setPassword}/>
                    <button id="signUpButton" style={buttonStyle} disabled={isButtonDisabled} className={`button ${isButtonDisabled ? 'disabled' : 'enabled'}`} onClick={handleOTP}>Sign Up</button>
                </div>
            </div></div>
        }
        {
            verify === "display"?<div><div className="blurDiv">
           
            </div>
            <div className="whiteBox">
                <img className="whiteBoxImage" src={register2} width="150vw" alt=""/>
                <img onClick={() => {setVerify("normal")}} className="cancelImage" src={cancel} width="25vw" alt="cancel"/>
                <h2 className="whiteBoxText">Verify your phone number before we send code</h2>
                <p className="whiteBoxSubtext">is this correct ? {input.map((e) =>(
                    <span className="whiteBoxSubtextNumber">{e.title}</span>
                ))}</p>
                <button id="yesButton"  className="btn btn-primary btn-lg" onClick={nextPage}>Yes</button>  <br/>
                <button onClick={() => {setVerify("normal")}} id="noButton" className="btn btn-outline-primary btn-lg">No</button>
            </div></div>:<div></div>
        }
        </>
     );
}

export default CreateAccount;