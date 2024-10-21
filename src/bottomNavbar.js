import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // If you're using react-router for navigation
import { Button } from 'react-bootstrap';
import home1 from "./icons/home.svg"
import home2 from "./icons/homeBlue.svg"
import piechart1 from "./icons/pie chart.svg"
import piechart2 from "./icons/pie chart blue.svg"
import scan_icon from "./icons/scan.svg"
import chat1  from "./icons/chat.svg"
import chat2  from "./icons/chatBlue.svg"
import profile1 from "./icons/profile.svg"
import profile2 from "./icons/profileBlue.svg"

const BottomNavbar = () => {
  const [activeIcon, setActiveIcon] = useState('home'); // default icon
  const navigate = useNavigate();

  const handleButtonClick = (iconName, path) => {
    setActiveIcon(iconName);
    navigate(path); // navigates to the specified route
  };

  return (
    <div
    style={{
        margin: "355px 0px 16px 12px",
        background: "#ffffff",
        height: "8vh",
        width:"93vw",
        borderRadius:"10px",
      }}
     className="fixed-bottom bg-light d-flex justify-content-around p-2">
      <Button style={{outline:"none",border:"none"}} onClick={() => handleButtonClick('home', '/home')} variant="none">
      <img style={{width:"21px"}} src={activeIcon === 'home' ? home2 : home1} alt='profile' />
      </Button>
      <Button style={{outline:"none",border:"none"}} onClick={() => handleButtonClick('spendings', '/spendings')} variant="none">
        <img style={{width:"21px"}} src={activeIcon === 'spendings' ? piechart2 : piechart1} alt='spendings' />
      </Button>
      <Button  style={{border: "none",height:"8vh",width:"18vw",background:"blue",borderRadius:"10px",marginTop:"-7px"}} onClick={() => handleButtonClick('home', '/home')} variant="light">
        <img style={{ display: "block", marginLeft: "10px" }} src={scan_icon} alt="scan"/>
      </Button>
      <Button style={{outline:"none",border:"none"}} onClick={() => handleButtonClick('support', '/support')} variant="none">
        <img style={{width:"21px"}} src={activeIcon === 'support' ? chat2 : chat1} alt='support' />
      </Button>
      <Button style={{outline:"none",border:"none"}} onClick={() => handleButtonClick('profile', '/profile')} variant="none">
        <img style={{width:"21px"}} src={activeIcon === 'profile' ? profile2 : profile1} alt='profile' />
      </Button>
    </div>
  );
};

export default BottomNavbar;