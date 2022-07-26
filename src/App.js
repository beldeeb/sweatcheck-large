import React from 'react';
//Pages
import Home from './pages/Home';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Exercises from "./pages/Exercises";
import Exercises2 from "./pages/Exercises2";
import Exercises3 from "./pages/Exercises3";
import Stats from "./pages/Stats";
import ResetConfirmation from "./pages/ResetConfirmation";
import EmailSent2 from "./pages/EmailSent2";
import PasswordReset from "./pages/PasswordReset";
import ForgottenPassword from "./pages/ForgottenPassword";
import EmailSent from "./pages/EmailSent";


//styled components
import {StyledContainer} from './components/Styles';

//Loader css
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import{ BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename="/sweatcheck-large">
      <StyledContainer>
        <Routes>

        <Route path="/resetConfirmation" element={<ResetConfirmation/>} />

        <Route path="/emailsent2" element={<EmailSent2/>} />

        <Route path="/passwordreset/:userId/:resetString" element={<PasswordReset/>} />

        <Route path="/forgottenpassword" element={<ForgottenPassword/>} />

        <Route path="/emailsent" element={<EmailSent/>} />

          <Route path="/signup" element={<Signup/>} />

          
          <Route path="/login" element={<Login/>} />

          
          <Route path="/dashboard" element={<Dashboard/>} />

          <Route path="/landing" element={<Landing/>} />
          
          <Route path="/exercises" element={<Exercises/>} />

          <Route path="/exercises2" element={<Exercises2/>} />

          <Route path="/exercises3" element={<Exercises3/>} />

          <Route path="/stats" element={<Stats/>} />

          <Route path="/" element={<Home/>} />


        </Routes>
      </StyledContainer>
    </Router>
  );
}

export default App;
