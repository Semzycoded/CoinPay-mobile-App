import arrow from "./icons/arrowlefttwo.svg";
import { useNavigate } from "react-router-dom";
import scanImage from  "./assets/scanImage.PNG"
import scan from "./icons/scan.svg"


function SignUp1() {
const navigate = useNavigate();




function backPage() {
    return ( 
        navigate("/AccountSetup4")
    );
}
function nextPage() {
    return ( 
        navigate("/SignUp2")
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

        <div  className="scanInfo">
            <img src={scanImage} style={{width:"60vw",margin:"9vh 0px 9vh 0px"}} alt="scanImage"/>
            <h1 className="scanHeader">Scan ID document to verify your identity</h1>
            <p  className="scanSubText">Confirm your identity with just a few taps on your phone</p>

            <div className="blueCircle">
                <img src={scan} onClick={nextPage} style={{marginTop:"11px"}} alt=""/>
            </div>
            <p className="scanText">Scan</p>
        </div>
        </>
     );
}

export default SignUp1;