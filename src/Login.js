import arrow from "./icons/arrowlefttwo.svg";
import PasswordInput from "./passwordVisibility";
import CountryCodeInput from "./CountryCodeInput";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function Login({input, setInput, newInput, setNewInput}) {
const navigate = useNavigate();
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
    navigate("/Home")
    );
}
    return ( 
        <>
            <div>
            <img onClick={backPage} className="arrowback2" src={arrow} alt="arrowback"/>
                <div className="createDiv">
                    <h1>Log in to Coinpay</h1>
                    <p style={{fontSize:"15px"}}>Enter your registered mobile number to log in.</p>
                    <h5 className="mt-4">Phone</h5>
                    <CountryCodeInput setNewInput={setNewInput} phoneNumber={phoneNumber}  setPhoneNumber={setPhoneNumber}/>
                    <h5 className="mt-3">Password</h5>
                    <PasswordInput  password={password} setPassword={setPassword}/>
                    <button 
                    id="loginButton" 
                    style={buttonStyle} 
                    disabled={isButtonDisabled} 
                    className={`button ${isButtonDisabled ? 'disabled' : 'enabled'}`} 
                    onClick={nextPage}
                    >Log in
                    </button>
                </div>
            </div>
        </>
     );
}

export default Login;