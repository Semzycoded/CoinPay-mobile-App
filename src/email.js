import { useNavigate } from "react-router-dom";
import arrow from "./icons/arrowlefttwo.svg";
import React, { useState } from 'react';
import { useEffect } from "react";


function Email() {
const navigate = useNavigate();
const [email, setEmail] = useState('');
const [emailError, setEmailError] = useState('');
const [isButtonDisabled, setIsButtonDisabled] = useState(true);

const buttonStyle = {
    cursor:isButtonDisabled ?"not-allowed":"pointer",
    backgroundColor:isButtonDisabled?"rgb(0, 0, 0 , 0.2)":"blue",
    color:isButtonDisabled?"gray":"white",
    border:"none",
    transition:"background-color 0.3s",
    marginTop:"49vh",
}

useEffect(() => {
    if (email && !emailError) {
    setIsButtonDisabled(false);
    } else {
    setIsButtonDisabled(true);
    }
}, [email, emailError]);

const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    validateEmail(emailValue);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };


function backPage() {
return ( 
navigate("/AccountSetup3")
);
}
function nextPage() {
return ( 
navigate("/SignUp1")
);
}
    return ( 
        <>
                  <img  onClick={backPage} className="arrowback" src={arrow} alt="arrowback" />
        <div
            style={{ height: "5px",width:"100%", transition: "0.5s ease"}}
            className="progress my-2"
        >
            <div
            className="progress-bar bg-primary"
            role="progressbar"
            style={{ width: "20%", height: "5px"}}
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
            ></div>
        </div>

            <div>
               <div style={{marginRight:"18px",marginLeft:"18px"}}>
                    <h1>Add your email</h1>
                    <p className="inputText1">This info needs to be accurate with your ID document</p>
                    <h5 className="inputText">Email</h5>
                    <input
                     className="inputName" 
                     type="email"
                     value={email}
                     onChange={handleEmailChange}
                     placeholder="name@example.com"
                     />
                    {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
               </div>
                <center>
                    <button id="continueButton" style={buttonStyle} disabled={isButtonDisabled} className={`button ${isButtonDisabled ? 'disabled' : 'enabled'}`}  onClick={nextPage}>Continue</button>
                </center>
            </div>
        </>
     );
}

export default Email;