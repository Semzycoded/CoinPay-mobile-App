import React, { forwardRef } from 'react';

const OtpInput = forwardRef(({ onChange, index, onKeyUp }, ref) => {
  const handleChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length <= 1) {
      onChange(index, inputValue);
    }
  };

  return (
    <input
      type="number"
      ref={ref}
      onChange={handleChange}
      onKeyUp={onKeyUp}
      maxLength={1}
      style={{width:"37px",height:"30px",color:"blue",borderBottom:"1px solid blue",borderTop:"1px solid white",borderLeft:"1px solid white",borderRight:"1px solid white",outline:"none",marginLeft:"9px",textAlign:"center",fontSize:"xx-large"}}
    />
  );
});

export default OtpInput;