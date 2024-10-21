import React, { useState } from 'react';
import show from "./icons/Eye1.svg"
import hide from "./icons/Eye2.svg"

const PasswordInput = ({password, setPassword}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='password'>
      <input
        placeholder='🔒  ●●●●●●●●●●●●●●●●●●●●●●'
        className='inputPassword'
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={handlePasswordChange}
      />
      <button className='visibilityButton' onClick={togglePasswordVisibility}>
        {showPassword ?<img src={hide}  alt='Hide'/> : <img src={show}  alt='show'/>}
      </button>
    </div>
  );
};

export default PasswordInput;