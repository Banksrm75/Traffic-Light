import React, {useState} from 'react';
import '../../styles/TrafficLight.css' 

const TrafficLight = () => {
    const [selectedColor, setSelectedColor] = useState("red");

    function nextColor(selectedColor) {
        if (selectedColor === "green") {
            setSelectedColor("red")
        }
        else if (selectedColor === "red") {
            setSelectedColor("yellow")
        }
        else if (selectedColor === "yellow") {
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

export default TrafficLight;