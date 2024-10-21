import React, { useState } from 'react';
import { currencyOptions, fixedAmounts } from './currencyData'; // Import the currency data and fixed amounts

const CurrencyDropdown = () => {
  const [selectedCurrency, setSelectedCurrency] = useState(currencyOptions[0]); // Default to the first currency
  const [amount, setAmount] = useState(fixedAmounts[currencyOptions[0].code]); // Initialize amount for default currency

  // Handle the change event for currency selection
  const handleCurrencyChange = (event) => {
    const selectedCode = event.target.value;
    const currency = currencyOptions.find((cur) => cur.code === selectedCode);
    setSelectedCurrency(currency);

    // Update the fixed amount based on the selected currency using the mapping
    const newAmount = fixedAmounts[selectedCode];
    setAmount(newAmount);
  };

  return (
    <div style={{ width: '80px', margin: '14px auto', textAlign: 'center'}}>
      {/* Dropdown */}
      <select
        value={selectedCurrency.code}
        onChange={handleCurrencyChange}
        style={{
            width: '100%',
            padding: '5px',
            background:"transparent",
            color:"white",
            border:"none",
            outline:"none",
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '12px',
            marginTop:"-60px",
          }}
      >
        <option value="" disabled>
            US Dollar
        </option>
        {currencyOptions.map((currency) => (
          <option key={currency.code} value={currency.code} style={{ display: 'flex', alignItems: 'center' }}>
            <img  style={{width:"10px"}} src={currency.flag} alt={currency.name}/>{currency.name}
          </option>
        ))}
      </select>

      {/* Display the fixed amount with currency symbol */}
      <div style={{ marginTop: '20px', fontSize: '24px', fontWeight: 'bold' }}>
        <div className="Money">
            <h1>{selectedCurrency.symbol}</h1>
            <h1>{amount}</h1>
        </div>
      </div>
    </div>
  );
};

export default CurrencyDropdown;