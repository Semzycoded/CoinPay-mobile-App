import send from "./icons/dollar.svg"
import request from "./icons/dollar2.svg"
import bank from "./icons/bank.svg"
import arrowUp from "./icons/arrow up.svg"
import arrowDown from "./icons/arrow down.svg"


function WhiteDiv() {
    return ( 
        <>
             <div className="smallWhiteDiv">
                <div className="smallerWhiteDiv">
                    <div className="contain">
                        <img className="smallerWhiteDivImg" src={send} alt=""/>
                        <img className="smallerWhiteDivImg2" src={arrowUp} alt=""/>
                        <p className="smallerWhiteDivText">Send</p>
                    </div>
                </div>
                <div className="smallerWhiteDiv">
                    <div className="contain">
                        <img className="smallerWhiteDivImg" src={request} alt=""/>
                        <img className="smallerWhiteDivImg2" src={arrowDown} alt=""/>
                        <p className="smallerWhiteDivText">Request</p>
                    </div>
                </div>
                <div className="smallerWhiteDiv">
                    <div className="contain">
                        <img className="smallerWhiteDivImg" src={bank} alt=""/>
                        <p className="smallerWhiteDivText">Bank</p>
                    </div>
                </div>
            </div>
        </>
     );
}

export default WhiteDiv;