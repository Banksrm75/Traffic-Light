import React, {useState} from 'react';
import '../../styles/TrafficLight.css' 

const TrafficLightManual = () => {
    const [selectedColor, setSelectedColor] = useState("red");

    function nextColor(currentColor) {
        if (currentColor === "green") {
            setSelectedColor("red")
        }
        else if (currentColor === "red") {
            setSelectedColor("yellow")
        }
        else if (currentColor === "yellow") {
            setSelectedColor("green")
        }
    }

    return (
        <>
            <div className="stem"></div>

            <div className="traffic-light-body">

                <div className={selectedColor === "red" ? "red selected" : "red"}></div>

                <div className={selectedColor === "yellow" ? "yellow selected" : "yellow"}></div>

                <div className={selectedColor === "green" ? "green selected" : "green"}></div>

            </div>
            <button className='changeLight' onClick={() => {nextColor(selectedColor)}}>Change the Light</button>
        </>
    )
}

export default TrafficLightManual