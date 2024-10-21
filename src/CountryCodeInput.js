import React, { useState } from 'react';
import getCountries from './getCountries';

const CountryCodeInput = ({setNewInput,phoneNumber, setPhoneNumber}) => {
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

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
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

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center'}}>
       <div className='codeDiv'>
        <img src={selectedCountry.flag} style={{ width: '24px',marginRight:"5px"}} alt='' />
          <select style={{border:"1px solid white",height:"35px",outline:"none",background:"white"}} value={selectedCountry.code} onChange={handleCountryChange}>
            {countries.map(country => (
              <option key={country.code} value={country.code}>
                {country.dialCode}
              </option>
            ))}
          </select>
       </div>
        <div className='numberDiv'>
          <input
          type="tel"
          value={phoneNumber}
          maxLength={11}
          onChange={handlePhoneNumberChange}
          placeholder="Mobile number"
          style={{ marginLeft: '8px',border:"none",outline:"none",height:"46px",marginTop:"-9px"}}
        />
        </div>
      </div>
    </div>
  );
};

export default CountryCodeInput;