import { useNavigate } from "react-router-dom";
import arrow from "./icons/arrowlefttwo.svg";
import React, { useState } from 'react';
import { useEffect } from "react";

function HomeAddress() {
const navigate = useNavigate();
const [input1, setInput1] = useState('');
const [input2, setInput2] = useState('');
const [input3, setInput3] = useState('');
const [isButtonDisabled, setIsButtonDisabled] = useState(true);

const buttonStyle = {
    cursor:isButtonDisabled ?"not-allowed":"pointer",
    backgroundColor:isButtonDisabled?"rgb(0, 0, 0 , 0.2)":"blue",
    color:isButtonDisabled?"gray":"white",
    border:"none",
    transition:"background-color 0.3s",
    marginTop:"22vh",
}

useEffect(() => {
    if (input1 && input2 && input3) {
    setIsButtonDisabled(false);
    } else {
    setIsButtonDisabled(true);
    }
}, [input1, input2, input3]);


function backPage() {
return ( 
navigate("/AccountSetup2")
);
}
function nextPage() {
return ( 
navigate("/AccountSetup4")
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
                    <h1>Home address</h1>
                    <p className="inputText1">This info needs to be accurate with your ID document</p>
                    <h5 className="inputText">Address Line</h5>
                    <input
                     className="inputName" 
                     type="text"
                     value={input1}
                     onChange={(e) => setInput1(e.target.value)}
                     placeholder="Mr. John Doe"
                     />
                    <h5 className="inputText">City</h5>
                    <input
                    className="inputName"
                    type="text"
                    placeholder="City, State"
                    value={input2}
                    onChange={(e) => setInput2(e.target.value)}
                    />
                    <h5 className="inputText">PostCode</h5>
                    <input
                    className="inputName"
                    type="text"
                    placeholder="Ex: 00000"
                    value={input3}
                    onChange={(e) => setInput3(e.target.value)}
                    />
               </div>
                <center>
                    <button id="continueButton" style={buttonStyle} disabled={isButtonDisabled} className={`button ${isButtonDisabled ? 'disabled' : 'enabled'}`}  onClick={nextPage}>Continue</button>
                </center>
            </div>
        </>
     );
}

export default HomeAddress;