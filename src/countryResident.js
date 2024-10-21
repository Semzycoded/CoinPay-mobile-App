import { useNavigate } from "react-router-dom";
import arrow from "./icons/arrowlefttwo.svg";
import React, { useState } from 'react';
import getCountries from './getCountries';


function CountryResident({setNewInput}) {
const navigate = useNavigate();
const countries = getCountries();
const [selectedCountry, setSelectedCountry] = useState(countries[0]);

const handleCountryChange = (e) => {
const selected = countries.find(country => country.code === e.target.value);
setSelectedCountry(selected);
const inputValue = e.target.value;

// Ensure the input is numeric (you can customize this validation)
if (/^\d+$/.test(inputValue)) {
    setNewInput(inputValue);

// Check if the input has reached 10 characters
if (inputValue.length >= 10) {
    return inputValue
}
}
};

function backPage() {
return ( 
navigate("/VerifyNumber")
);
}
function nextPage() {
return ( 
navigate("/AccountSetup2")
);
}
    return ( 
        <>
        <img  onClick={backPage} className="arrowback" src={arrow} alt="arrowback" />
        <div
            style={{ height: "5px",width:"100%", transition: "0.5s ease" }}
            className="progress my-2"
        >
            <div
            className="progress-bar bg-primary"
            role="progressbar"
            style={{ width: "15%", height: "5px" }}
            aria-valuenow="15"
            aria-valuemin="0"
            aria-valuemax="100"
            ></div>
        </div>

            <div>
               <div style={{marginRight:"18px",marginLeft:"18px"}}>
                    <h1>Country of resident</h1>
                    <p>This info needs to be accurate with your ID document</p>
                    <h5>Country</h5>
               </div>
                <center>
                    <div style={{border:"1px solid black",width:"90vw",height:"50px",borderRadius:"8px"}}>
                    <img src={selectedCountry.flag} style={{width:"20px"}} alt='i' />
                    <select style={{border:"1px solid white",width:"83vw",height:"48px",outline:"none",borderRadius:"8px",background:"white"}} value={selectedCountry.code} onChange={handleCountryChange}>
                        {countries.map(country => (
                        <option key={country.code} value={country.code} style={{width:"10vw"}}>
                            {country.name}
                        </option>
                        ))}
                    </select>
                    </div>
                    <button id="continueButton" style={{marginTop:"49vh"}} className="btn btn-primary btn-md" onClick={nextPage}>Continue</button>
                </center>
            </div>
        </>
     );
}

export default CountryResident;