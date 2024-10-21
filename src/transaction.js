import  arrow   from    "./icons/arrow-right.svg"
import  spend   from    "./icons/creditCard.svg"
import  spend2  from    "./icons/minus.svg"
import  income  from    "./icons/coin.svg"
import  bills   from    './icons/bill.svg'
import  save    from    './icons/savings.svg'

const transaction = [
    { color: 'darkred', color2:'blue', text1: 'Spending', text2: '-$500', image:'./icons/creditCard.svg'},
    { color: 'green', color2:'green', text1: 'Income', text2: '$3000', image:'./icons/coin.svg'},
    { color: 'darkred', color2:'orange', text1: 'Bills', text2: '-$800', image:'./icons/bill.svg'},
    { color: 'orange', color2:'pink', text1: 'Saving', text2: '$1000', image:'./icons/savings.svg'},
];


function Transaction() {
    return ( 
        <>
           <div className="transactionWhiteDiv">
                <div className="smalltransactionWhiteDiv">
                    <div style={{backgroundColor:"#ddddff"}} className="roundCircle">
                        <img className="transactionImage" src={spend} alt=""/>
                        <img className="transactionImage2" src={spend2} alt=""/>
                    </div>
                    {
                        transaction
                        .filter((e) => e.text1 === "Spending")
                        .map((e) =>(
                           <>
                            <p className="transactionText1">{e.text1}</p>
                            <h4 className="transactionText2" style={{color:e.color}}>{e.text2}</h4>
                           </>
                        ))
                    }
                    <img className="transactionArrow" src={arrow} alt=""/>
                </div>

                <div className="smalltransactionWhiteDiv">
                    <div style={{backgroundColor:"#d9e7e2"}} className="roundCircle">
                        <img className="transactionImage" src={income} alt=""/>
                    </div>
                    {
                        transaction
                        .filter((e) => e.text1 === "Income")
                        .map((e) =>(
                           <>
                            <p className="transactionText1">{e.text1}</p>
                            <h4 className="transactionText2" style={{color:e.color}}>{e.text2}</h4>
                           </>
                        ))
                    }
                    <img className="transactionArrow" src={arrow} alt=""/>
                </div>

                <div className="smalltransactionWhiteDiv">
                    <div style={{backgroundColor:"#f4ecc2"}} className="roundCircle">
                        <img className="transactionImage" src={bills} alt=""/>
                    </div>
                    {
                        transaction
                        .filter((e) => e.text1 === "Bills")
                        .map((e) =>(
                           <>
                            <p className="transactionText1">{e.text1}</p>
                            <h4 className="transactionText2" style={{color:e.color}}>{e.text2}</h4>
                           </>
                        ))
                    }
                    <img className="transactionArrow" src={arrow} alt=""/>
                </div>

                <div className="smalltransactionWhiteDiv">
                    <div style={{backgroundColor:"#ffddee"}} className="roundCircle">
                        <img className="transactionImage" src={save} alt=""/>
                    </div>
                    {
                        transaction
                        .filter((e) => e.text1 === "Saving")
                        .map((e) =>(
                           <>
                            <p className="transactionText1">{e.text1}</p>
                            <h4 className="transactionText2" style={{color:e.color}}>{e.text2}</h4>
                           </>
                        ))
                    }
                    <img className="transactionArrow" src={arrow} alt=""/>
                </div>
           </div>
        </>
     );
}

export default Transaction;