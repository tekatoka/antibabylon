import React from "react";

const TimeLine = () => {
    return (
    <>
        <div className="time-line"></div>
        <div className="timeline-wrapper">
            <div className="circle-wrapper" style={{top:"4px"}}>
                <div className="circle"></div>
            </div>

            <div className="circle-wrapper" style={{bottom:"-25px"}}>
                <div className="circle"></div>
            </div>
        </div>
    </>
    );
};

export default TimeLine;