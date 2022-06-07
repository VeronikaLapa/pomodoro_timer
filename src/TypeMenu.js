import React from 'react';
import "./TypeMenu.scss";

function TypeMenu(props) {
    return (
        <div>
            <div className="menu">
                <div className="menu__item menu__item_active">
                    <div className="item__text">
                        pomodoro
                    </div>
                </div>
                <div className="menu__item">
                    <div className="item__text">
                        short break
                    </div>
                </div>
                <div className="menu__item">
                    <div className="item__text">
                        long break
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TypeMenu;
