import React from 'react';
import "./TypeMenu.scss";

function TypeMenu({resetTimer}) {
    return (
        <div>
            <div className="menu">
                <input type="radio" name="type" id="pomodoro" value="pomodoro" defaultChecked={true} onChange={() => resetTimer(15*60)}/>
                <label className="menu__item" htmlFor="pomodoro">
                    <div className="item__text" >
                        pomodoro
                    </div>
                </label>
                <input type="radio" name="type" id="short_break" value="short_break" onChange={() => resetTimer(3*60)}/>
                <label className="menu__item" htmlFor="short_break">
                    <div className="item__text">
                        short break
                    </div>
                </label>
                <input type="radio" name="type" id="long_break" value="long_break" onChange={() => resetTimer(5*60)}/>
                <label className="menu__item" htmlFor="long_break">
                    <div className="item__text">
                        long break
                    </div>
                </label>
            </div>
        </div>
    );
}

export default TypeMenu;
