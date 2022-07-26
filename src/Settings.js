import React, {useState} from 'react';
import { MdSettings } from 'react-icons/md'
import "./Settings.scss"
import Modal from "./Modal";
import {FontContext, fonts} from "./сontexts/FontContext";

function Settings(props) {
    let [show, setShow] = useState(false);
    let [settings, setSettings] = useState({font: fonts.sans})
    let saveSettings = function(setFont) {
        setFont(settings.font);
    }
    function FontItem({name}) {
        return <>
            <input type="radio" name="font"
                   id={name}
                   value={name}
                   checked={settings.font===name}
                   onChange={() => setSettings(prevSettings=>({...prevSettings, font: name}))}/>
            <label htmlFor={name} className={`${name}-font`}>Aa</label>
        </>
    }
    return (
        <FontContext.Consumer>
            {({font, setFont}) => (
                <div className="settings">
                    <button className="settings__button icon-button" onClick={()=>{setShow(true)}}>
                        <MdSettings className= "settings__button-icon"/>
                    </button>
                    <Modal show={show} title="Settings"
                           onClose={()=>{setShow(false)}}
                           actionName="Apply"
                           actionFunction={(e)=>{
                               e.preventDefault();
                               saveSettings(setFont);
                               setShow(false);
                            }
                           }>

                        <div className="modal__menu-item modal__menu-item_first">
                            <h2>Time</h2>
                        </div>
                        <div className="modal__menu-item">
                            <h2>Font</h2>
                            <FontItem name="sans"></FontItem>
                            <FontItem name="roboto"></FontItem>
                            <FontItem name="monospace"></FontItem>
                        </div>
                        <div className="modal__menu-item">
                            <h2>Color</h2>
                        </div>

                    </Modal>
                </div>
                )
            }
        </FontContext.Consumer>
    );
}

export default Settings;
