import React from "react";
import Slider from "../components/Slider/Slider";


const Home = ({ onSlideChange }) => {
    
    return (
        <div>
            <Slider onSlideChange={onSlideChange} />
        </div>
    );
}

export default Home;