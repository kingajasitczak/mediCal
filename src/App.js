import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import SurveyChoice from "./SurveyChoice";
import BasicSurvey from "./BasicSurvey";
import ExtendedSurvey from "./ExtendedSurvey"; // ⬅️ Add this
import CalenderView from "./CalenderView";
import Profile from "./profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/survey-choice" element={<SurveyChoice />} />
        <Route path="/basic-survey" element={<BasicSurvey />} />
        <Route path="/extended-survey" element={<ExtendedSurvey />} /> {/* ⬅️ New route */}
        <Route path="/calendar" element={<CalenderView />} />
        <Route path="/profile" element={<Profile />} /> 

      </Routes>
    </Router>
  );
}

export default App;
