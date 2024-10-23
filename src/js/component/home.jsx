import React from "react";
import TrafficLight from "./TrafficLight.jsx";
import TrafficLightManual from "./TrafficLightManual.jsx";
import '../../styles/home.css' 

const Home = () => {
	return (
		<>
			<div className="separateLights">
				<h1>Automatic Stoplight</h1>
				<TrafficLight />
			</div>
			<br></br>
			<div className="separateLights">
				<h1>Manual Stoplight</h1>
				<TrafficLightManual />
			</div>
			
		</>
	);
};

export default Home;
