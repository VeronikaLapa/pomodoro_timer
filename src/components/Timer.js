import React, {useContext, useEffect, useRef, useState} from 'react';
import "./Timer.scss";
import {SettingsContext} from "../сontexts/SettingsContext";

function Timer({limit}) {
    const [timer, setTimer] = useState(limit);
    const [pause, setPause] = useState(false);
    let color = useContext(SettingsContext)?.settings?.color;

    let interval = useRef(null);

    const dashArray = 965;

    useEffect(()=> {
        if (timer > 0 && !pause) {
            interval.current = setTimeout(()=>{setTimer(timer-1)}, 1000);
        } else {
            clearInterval(interval.current);
        }
    },[timer, pause])

    useEffect(() => {
        setTimer(limit);
        clearInterval(interval.current);
        setPause(true);
    }, [limit]);

    function getMinutes() {
        return Math.floor(timer / 60 ).toString().padStart(2, '0');
    }
    function getSeconds() {
        return (timer % 60).toString().padStart(2,'0');
    }
    function onTimerClick() {
        if (timer === 0) {
            setTimer(limit);
            setPause(false);
        } else {
            setPause(!pause);
            clearInterval(interval.current);
        }
    }
    function getTimerStatus() {
        if (timer === 0) {
            return 'restart';
        } else {
            return pause ? 'start':'pause';
        }
    }
    function calculateProgress() {
        return dashArray * (timer/limit);
    }
    return (
        <div className="timer">
            <div className="timer__background" onClick={onTimerClick}>
                <svg className="timer__progress-view">
                    <circle className={`timer__progress-bar ${color}-color`}
                    r="48%"
                    strokeDasharray={dashArray}
                    strokeDashoffset={calculateProgress()}/>
                </svg>
                <div className="timer__text">
                    <div className="timer__time">{getMinutes()}:{getSeconds()}</div>
                    <div className="timer__action-pause" >{getTimerStatus()}</div>
                </div>
            </div>
        </div>
    );
}

export default Timer;
