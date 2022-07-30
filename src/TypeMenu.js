import React, {useContext} from 'react';
import "./TypeMenu.scss";
import {SettingsContext} from "./сontexts/SettingsContext";

function TypeMenu({resetTimer}) {
    let color = useContext(SettingsContext)?.settings?.color;
    return (
        <div>
            <div className="menu">
                <input type="radio" name="type" id="pomodoro" value="pomodoro" defaultChecked={true} onChange={() => resetTimer(15*60)}/>
                <label className={`menu__item ${color}-color`} htmlFor="pomodoro">
                    <div className="item__text" >
                        pomodoro
                    </div>
                </label>
                <input type="radio" name="type" id="short_break" value="short_break" onChange={() => resetTimer(3*60)}/>
                <label className={`menu__item ${color}-color`} htmlFor="short_break">
                    <div className="item__text">
                        short break
                    </div>
                </label>
                <input type="radio" name="type" id="long_break" value="long_break" onChange={() => resetTimer(5*60)}/>
                <label className={`menu__item ${color}-color`} htmlFor="long_break">
                    <div className="item__text">
                        long break
                    </div>
                </label>
            </div>
        </div>
    );
}

export default TypeMenu;
