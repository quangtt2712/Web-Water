import React from "react";
import Slider from "../components/Slider/Slider";
import Section1_home from "../components/Section/section1_home.js";
import Section2_home from "../components/Section/section2_home.js";
import Section3_home from "../components/Section/section3_home.js";

const Home = ({ onSlideChange }) => {
    return (
        <div>
            <Slider onSlideChange={onSlideChange} />
            <Section1_home />
            <Section2_home />
            <Section3_home />
        </div>
    );
}

export default Home;