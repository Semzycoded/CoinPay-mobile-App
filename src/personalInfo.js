import { useNavigate } from "react-router-dom";
import arrow from "./icons/arrowlefttwo.svg";
import React, { useState } from 'react';
import DateInput from "./DataInput";
import { useEffect } from "react";


function PersonalInfo() {
const navigate = useNavigate();
const [input1, setInput1] = useState('');
const [email, setEmail] = useState('');
const [selectedDate, setSelectedDate] = useState(null);
const [emailError, setEmailError] = useState('');
const [isButtonDisabled, setIsButtonDisabled] = useState(true);

const buttonStyle = {
    cursor:isButtonDisabled ?"not-allowed":"pointer",
    backgroundColor:isButtonDisabled?"rgb(0, 0, 0 , 0.2)":"blue",
    color:isButtonDisabled?"gray":"white",
    transition:"background-color 0.3s",
    marginTop:"21vh",
    border:"none"
}

useEffect(() => {
  if (input1 && email && selectedDate && !emailError) {
    setIsButtonDisabled(false);
  } else {
    setIsButtonDisabled(true);
  }
}, [input1,email, selectedDate, emailError]);

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
navigate("/AccountSetup1")
);
}
function nextPage() {
return ( 
navigate("/AccountSetup3")
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
            style={{ width: "17%", height: "5px"}}
            aria-valuenow="17"
            aria-valuemin="0"
            aria-valuemax="100"
            ></div>
        </div>

            <div>
               <div style={{marginRight:"18px",marginLeft:"18px"}}>
                    <h1>Add your personal info</h1>
                    <p className="inputText1">This info needs to be accurate with your ID document</p>
                    <h5 className="inputText">Full Name</h5>
                    <input
                     className="inputName" 
                     type="text"
                     value={input1}
                     onChange={(e) => setInput1(e.target.value)}
                     />
                    <h5 className="inputText">Username</h5>
                    <input
                     className="inputName" 
                     type="email"
                     value={email}
                     onChange={handleEmailChange}
                     />
                    {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
                    <h5 className="inputText">Date of Birth</h5>
                    <DateInput
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                    />
               </div>
                <center>
                    <button id="continueButton" style={buttonStyle} disabled={isButtonDisabled} className={`button ${isButtonDisabled ? 'disabled' : 'enabled'}`}  onClick={nextPage}>Continue</button>
                </center>
            </div>
        </>
     );
}

export default PersonalInfo;