import arrow from "./icons/arrowlefttwo.svg";
import { useNavigate } from "react-router-dom";
import {useRef, useState} from "react";
import OtpInput from "./otpInput";



function VerifyNumber({input,setInput}) {
const navigate = useNavigate();
const otpRefs = useRef([]);
const [otp, setOtp] = useState(Array(6).fill(''));

const handleOtpChange = (index, value) => {
  const newOtp = [...otp];
  newOtp[index] = value;
  setOtp(newOtp);
};

const handleKeyUp = (index, event) => {
  if (event.key === 'Backspace' && index > 0) {
    otpRefs.current[index - 1].focus();
  } else if (index < otpRefs.current.length - 1 && event.target.value) {
    otpRefs.current[index + 1].focus();
  }
};

const isButtonDisabled = otp.some(val => val === '');

const buttonStyle = {
    cursor:isButtonDisabled ?"not-allowed":"pointer",
    backgroundColor:isButtonDisabled?"rgb(0, 0, 0 , 0.2)":"blue",
    color:isButtonDisabled?"gray":"white",
    border:"none",
    transition:"background-color 0.3s",
}

function backPage() {
  return ( 
  navigate("/CreateAccount")
  );
}
function nextPage() {
  return ( 
  navigate("/AccountSetup1")
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
          style={{ width: "12%", height: "5px" }}
          aria-valuenow="12"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>


        <div className="confirmText">
        <h1>Confirm your phone</h1>
        <p style={{}} className="codesent">We sent 6 digit code to {input.map((e) =>(
          <span>{e.title}</span>
       ))}
       </p>
        </div>
        <div  style={{textAlign:"center",justifyContent:"center", display:"flex"}}>
        {otp.map((value, index) => (
          <OtpInput
            key={index}
            ref={(el) => otpRefs.current[index] = el}
            value={value}
            onChange={handleOtpChange}
            index={index}
            onKeyUp={(event) => handleKeyUp(index, event)}
            maxLength={1}
          />
        ))}
      </div>
          <center>
              <div><p className="resend" onClick={backPage}>Didn't get a code ? <span className="resendLink">Resend</span></p></div>

              <button id="verifyButton" style={buttonStyle} disabled={isButtonDisabled}  className={`button ${isButtonDisabled ? 'disabled' : 'enabled'}`} onClick={nextPage}>Verify Your Number</button>
          </center>
        </>
     );
}

export default VerifyNumber;