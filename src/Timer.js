import React from 'react';
import "./Timer.scss";

function Timer(props) {
    return (
        <div className="timer">
            <div className="timer__background">
                <svg className="timer__progress-view">
                    <circle className="timer__progress-bar"
                    r="48%"
                    strokeDasharray="720"
                    strokeDashoffset={350}/>
                </svg>
                <div className="timer__text">
                    <div className="timer__time">10:13</div>
                    <div className="timer__action-pause">pause</div>
                </div>
            </div>
        </div>
    );
}

export default Timer;
