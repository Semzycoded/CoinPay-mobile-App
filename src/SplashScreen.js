import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./assets/coinpayLogo.PNG";

function SplashScreen() {
  const navigate = useNavigate();
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Navigate to the next page after 5 seconds
      navigate("/Onboarding");
    }, 5000);

    return () => clearTimeout(timeoutId); // Cleanup the timeout when the component unmounts
  }, [navigate]);

  return (
    <>
      <div>
        <img className="splashscreenImage" src={logo} alt="" />
      </div>
    </>
  );
}

export default SplashScreen;
