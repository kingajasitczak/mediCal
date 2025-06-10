import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import SurveyChoice from "./SurveyChoice";
import BasicSurvey from "./BasicSurvey";
import ExtendedSurvey from "./ExtendedSurvey"; // ⬅️ Add this
import CalenderView from "./CalenderView";
import Profile from "./profile";
import AboutUs from "./AboutUs";
import Articles from "./Articles";
import Article1 from "./Article1";
import Article3 from "./Article3";
import Article2 from "./Article2";
import EditProfile from "./EditProfile";

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
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/articles" element={<Articles/>} />
        <Route path="/article1" element={<Article1/>} />
        <Route path="/article3" element={<Article3/>} />
        <Route path="/article2" element={<Article2/>} />
        <Route path="/editprofile" element={<EditProfile/>} />


      </Routes>
    </Router>
  );
}

export default App;
