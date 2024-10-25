import React, { useState } from 'react';
import  spend   from    "./icons/creditCard.svg"
import  spend2  from    "./icons/minus.svg"
import  income  from    "./icons/coin.svg"
import  bills   from    './icons/bill.svg'
import  save    from    './icons/savings.svg'



const transaction = [
    { label: "Spending", color: "text-primary" },
    { label: "Income", color: "text-muted" },
    { label: "Bills", color: "text-muted" },
    { label: "Savings", color: "text-muted" }
]

const ranges = [
    { range: "2-8", amount: 100 },
    { range: "9-15", amount: 90 },
    { range: "16-22", amount: 80 },
    { range: "23-29", amount: 70 },
    { range: "30-1", amount: 60 },
  ];

function Spendings() {
const [selectedMonth, setSelectedMonth] = useState("");

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value); // Update selected month
  };
    return ( 
        <div style={{backgroundColor:"rgba(0, 0, 0, 0.04)"}} className="container-fluid min-vh-100 d-flex justify-content-center align-items-center mb-5 p-0 m-0">
        <div className="rounded-3 p-4 shadow-lg w-100" style={{ maxWidth: "500px" }}>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <i className="fas fa-chevron-left text-secondary"></i>
                <h1 className="h5 fw-semibold">Spending</h1>
                <div className="w-4"></div>
            </div>

            <div className="mb-4">
                <select 
                    id="monthSelect"
                    className="form-select form-select-sm rounded"
                    value={selectedMonth} 
                    onChange={handleMonthChange}
                    style={{ width: '110px', fontSize: '14px', padding: '4px',border:"none",outline:"none",backgroundColor:"rgb(226, 246, 255)"}}
                >
                    <option value="">January</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                </select>
    </div>

            <div className="row g-2 mb-4">
                <div className="col-6">
                    <div className="bg-primary text-white p-3 rounded">
                        <p className="small mb-1">Total Spend</p>
                        <p className="h5 fw-semibold">$500.00</p>
                    </div>
                </div>
                <div className="col-6">
                    <div className="bg-warning text-white p-3 rounded">
                        <p className="small fs-9 mb-1"><i className="fas fa-credit-card-alt"></i>
Available Balance</p>
                        <p className="h5 fw-semibold">$20,000.00</p>
                    </div>
                </div>
            </div>

            <div className="d-flex bg-white justify-content-between rounded border-bottom border-primary align-items-end mb-4 pt-5 px-2">
                {ranges.map((item, index) => (
                    <div className="text-center" key={index}>
                    <div
                        className={`bg-${index % 2 === 0 ? 'primary' : 'warning'} mx-auto mb-2`}
                        style={{
                        width: "20px",
                        height: `${item.amount}px`, // Adjust height based on amount
                        position: 'relative' // Set relative positioning to the bar
                        }}
                    >
                        <p
                        className="small text-muted"
                        style={{
                            position: 'absolute', // Absolute positioning
                            bottom: '70%', // Place above the bar
                            left: '50%', // Center the text
                            transform: 'translateX(-50%) translateY(-50%) rotate(180deg)', // Center adjustment
                            writingMode: 'vertical-lr', // Rotate text vertically
                            whiteSpace: 'nowrap' // Prevent text wrapping
                        }}
                        >
                        ${item.amount}
                        </p>
                    </div>
                    <p className="text-muted small">{item.range}</p>
                    </div>
                ))}
            </div>

            <div style={{marginTop:"-30px"}} className="bg-white d-flex justify-content-around rounded  mt-2 mb-4 pb-4 pt-3">
                <div style={{backgroundColor:"#ddddff"}} className="roundCircle">
                        <img className="transactionImage" src={spend} alt=""/>
                        <img className="transactionImage2" src={spend2} alt=""/>
                        {
                        transaction
                        .filter((e) => e.label === "Spending")
                        .map((e, index) =>(
                            <div className="text-center" key={index}>
                                <p style={{marginLeft:"-20px"}} className="small mt-1">{e.label}</p>
                            </div>
                        ))
                    }
                </div>
                <div style={{backgroundColor:"#d9e7e2"}} className="roundCircle">
                    <img className="transactionImage" src={income} alt=""/> 
                        {
                        transaction
                        .filter((e) => e.label === "Income")
                        .map((e, index) =>(
                            <div className="" key={index}>
                                <p style={{marginLeft:"-15px"}} className="small mt-1">{e.label}</p>
                            </div>
                        ))
                    }
                </div>
                <div style={{backgroundColor:"#f4ecc2"}} className="roundCircle">
                        <img className="transactionImage" src={bills} alt=""/>
                        {
                        transaction
                        .filter((e) => e.label === "Bills")
                        .map((e, index) =>(
                            <div className="" key={index}>
                                <p style={{marginLeft:"-4px"}} className="small mt-1">{e.label}</p>
                            </div>
                        ))
                    }
                </div>
                <div style={{backgroundColor:"#ffddee"}} className="roundCircle">
                        <img className="transactionImage" src={save} alt=""/>
                        {
                        transaction
                        .filter((e) => e.label === "Savings")
                        .map((e, index) =>(
                            <div className="" key={index}>
                                <p style={{marginLeft:"-20px"}} className="small mt-1">{e.label}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="mb-5">
                <h2 className="h5 fw-semibold mb-3">Spending list</h2>
                {[
                    { 
                    logo: "data:image/png;base64,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", 
                    text: "Netflix", 
                    date: "1st Jan at 7:20pm", 
                    amount: "-$15.99" 
                    },
                    { 
                    logo: "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png", 
                    text: "Google", 
                    date: "1st Jan at 7:20pm", 
                    amount: "-$100" 
                    },
                    { 
                    logo: "https://cdn2.iconfinder.com/data/icons/social-micon/512/spotify-512.png",
                    text: "Spotify",  
                    date: "1st Jan at 7:20pm", 
                    amount: "-$100" 
                    }
                ].map((spending, index) => (
                    <div className="d-flex justify-content-between align-items-center mb-2" key={index}>
                    <div className="d-flex align-items-center">
                        <img src={spending.logo} alt={`${spending.logo} logo`} className="rounded-circle me-2" style={{ width: '32px', height: '32px' }} />
                        <div>
                        <p className="mb-0 small fw-semibold">{spending.text}</p>
                        <p className="mb-0 small text-muted">{spending.date}</p>
                        </div>
                    </div>
                    <p className="text-danger fw-semibold">{spending.amount}</p>
                    </div>
                ))}
            </div>

        </div>
    </div>
);
};

export default Spendings;