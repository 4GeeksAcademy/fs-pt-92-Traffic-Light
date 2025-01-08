import React, { useState } from "react";

const TrafficLight = () => {

    const [color, setColor] = useState("red");
    const [addPurple, setAddPurple] = useState(false);

    const colors = ["red", "yello", "green"];
    const colorIndex = 0;

    const alternateColors = (prevColor) => {
        if (prevColor === "red") setColor("yellow");
        if (prevColor === "yellow") setColor("green");
        if (prevColor === "green" && !addPurple) setColor("red");
        if (prevColor === "green" && addPurple) setColor("purple");
        if (prevColor === "purple") setColor("red");
    }

    const addPurpleLight = () => {
        if (addPurple) {
            return <div className={color === "purple" ? "purple light selected" : "purple light"} onClick={() => setColor("purple")}></div>
        }
    }

    return (
        <div>
            <div id="trafficTop"></div>
            <div className={addPurple ? "trafficLights trafficLigtsBig" : "trafficLights"}>
                <div className={color === "red" ? "red light selected" : "red light"} onClick={() => setColor("red")}></div>
                <div className={color === "yellow" ? "yellow light selected" : "yellow light"} onClick={() => setColor("yellow")}></div>
                <div className={color === "green" ? "green light selected" : "green light"} onClick={() => setColor("green")}></div>
                {addPurpleLight()}
            </div>

            <button id="toggleButton" onClick={() => alternateColors(color)}>
                Alternate Color
            </button>
            <button id="purpleButton" onClick={() => {
                setAddPurple(!addPurple)
                if (addPurple) {
                    setColor("red");
                }
            }}>
                {addPurple ? "Remove Purple" : "Add Purple"}
            </button>
        </div>
    )
}

export default TrafficLight;