import React, {useState} from 'react';
import '../../styles/TrafficLight.css' 

const TrafficLight = () => {
    const [selectedColor, setSelectedColor] = useState("red");
    const [isAuto, setIsAuto] = useState(true);

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

    const changeLightAutomatically = () => {
        if (isAuto) {
          nextColor(selectedColor)  
        }
    }

    setTimeout(() => {
        changeLightAutomatically()
    }, 2000);    
    

    return (
        <>
            <div className="stem"></div>

            <div className="traffic-light-body">

                <div className={selectedColor === "red" ? "red selected" : "red"}></div>

                <div className={selectedColor === "yellow" ? "yellow selected" : "yellow"}></div>

                <div className={selectedColor === "green" ? "green selected" : "green"}></div>

            </div>

        </>
    )
}

export default TrafficLight