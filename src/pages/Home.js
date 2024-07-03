import React from "react";
import Slider from "../components/Slider/Slider";
import Section1Home from "../components/Section/Section1Home";
import Section2Home from "../components/Section/Section2Home";
import Section3Home from "../components/Section/Section3Home";

const Home = ({ onSlideChange }) => {
    return (
        <div>
            <Slider onSlideChange={onSlideChange} />
            <Section1Home />
            <Section2Home />
            <Section3Home />
        </div>
    );
}

export default Home;
