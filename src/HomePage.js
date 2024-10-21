import trophy from "./icons/trophy.svg"
import bell from "./icons/bell.svg"
import CurrencyDropdown from "./CurrencyDropdown"
import wallet from "./icons/wallet.svg"
import WhiteDiv from "./whiteDiv"
import Transaction from "./transaction"
import arrowRight from "./icons/arrow right.svg"


function HomePage() {
    return ( 
        <>
        <div className="HomePage">
            <div className="blueDiv">
                <div className="homeSearchDiv">

                    <img src={trophy} width="19px" height="19px" className="trophy" alt=""/>                    
                    <input placeholder="search " id="searchInput"/>
                    <img src={bell} width="19px" height="19px" className="bell" alt=""/>

                    <CurrencyDropdown/>

                    <p className="MoneySubText">Available Balance</p>

                    <button id="AddmoneyBtn" className="btn  btn-outline-light btn-sm">
                    <div className="AddmoneyBtnText"><img style={{width:"12px"}} src={wallet} alt="wallet"/>Add Money</div>
                    </button>
                </div>
            </div>
                <WhiteDiv/>
                <div className="transactionHeader">
                    <h4>Transaction</h4>
                    <img style={{marginTop:"-5px",marginLeft:"199px"}} src={arrowRight} alt="arrowRight"/>
                </div>
                <Transaction/>
                </div>
        </>
     );
}

export default HomePage;