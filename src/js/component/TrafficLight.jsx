import React, {useState} from 'react';
import '../../styles/TrafficLight.css' 

const TrafficLight = () => {
    const [selectedColor, setSelectedColor] = useState("");
    return (
        <>
            <div className="stem"></div>
            <div className="traffic-light-body">
                <div className={selectedColor === "red" ? "red selected" : "red"}
                    onClick={() => {setSelectedColor("red")}}>                
                </div>

                <div className={selectedColor === "yellow" ? "yellow selected" : "yellow"}
                    onClick={() => {setSelectedColor("yellow")}}>                
                </div>

                <div className={selectedColor === "green" ? "green selected" : "green"}
                    onClick={() => {setSelectedColor("green")}}>                
                </div>

            </div>
        </>
    )
}

export default TrafficLight;