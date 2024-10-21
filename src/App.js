import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import  "font-awesome/css/font-awesome.min.css"
import {Routes, Route, useLocation} from "react-router-dom";
import { useState } from "react";
import SplashScreen from  "./SplashScreen";
import Onbording from "./Onbording";
import Registration from "./Registration";
import CreateAccount from "./CreateAccount";
import VerifyNumber from "./VerifyNumber";
import CountryResident from "./countryResident";
import PersonalInfo from "./personalInfo";
import HomeAddress from "./homeAddress";
import Email from "./email";
import SignUp1 from "./SignUp1";
import SignUp2 from "./SignUp2";
import SignUp3 from "./SignUp3";
import SignUp4 from "./SignUp4";
import SignUp5 from "./SignUp5";
import Login from "./Login";
import HomePage from "./HomePage";
import WelcomePage from "./Welcome";
import Profile from "./profile";
import Support from "./support";
import Spendings from "./spendings";
import BottomNavbar from "./bottomNavbar";

function App() {
const [input, setInput] = useState([]);
const[newInput, setNewInput] = useState("")
const location = useLocation(); // Get the current location

// Define the paths where the BottomNavbar should be visible
const pathsWithNavbar = ['/home','/Home','/profile','/Profile','/spendings','/Spendings','/support','/Support'];
  return (
    <>      
        <Routes>
          <Route path="" exact element={<SplashScreen />} />
          <Route path="/onboarding" exact element={<Onbording/>} />
          <Route path="/registration" exact element={<Registration/>} />
          <Route path="/login" exact element={<Login input={input} setInput={setInput} newInput={newInput} setNewInput={setNewInput}/>} />
          <Route path="/createaccount" exact element={<CreateAccount input={input} setInput={setInput} newInput={newInput} setNewInput={setNewInput}/>} />
          <Route path="/verifynumber" exact element={<VerifyNumber input={input} setInput={setInput} newInput={newInput} setNewInput={setNewInput}/>} />
          <Route path="/accountsetup1" exact element={<CountryResident setNewInput={setNewInput}/>} />
          <Route path="/accountsetup2" exact element={<PersonalInfo/>} />
          <Route path="/accountsetup3" exact element={<HomeAddress/>} />
          <Route path="/accountsetup4" exact element={<Email/>} />
          <Route path="/signup1" exact element={<SignUp1/>} />
          <Route path="/signup2" exact element={<SignUp2/>} />
          <Route path="/signup3" exact element={<SignUp3/>} />
          <Route path="/signup4" exact element={<SignUp4/>} />
          <Route path="/signup5" exact element={<SignUp5/>} />
          <Route path="/welcome" exact element={<WelcomePage/>} />
          <Route path="/home" exact element={<HomePage/>} />
          <Route path="/profile" exact element={<Profile/>} />
          <Route path="/spendings" exact element={<Spendings/>} />
          <Route path="/support" exact element={<Support/>} />
        </Routes>
        {pathsWithNavbar.includes(location.pathname) && <BottomNavbar />}
    </>
  );
}

export default App;
