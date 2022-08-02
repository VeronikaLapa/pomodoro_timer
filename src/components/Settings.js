import React, {useContext, useState} from 'react';
import {MdCheck, MdSettings} from 'react-icons/md'
import "./Settings.scss"
import Modal from "./Modal";
import {SettingsContext} from "../сontexts/SettingsContext";

function Settings(props) {
    let [show, setShow] = useState(false);
    let [crntSettings, setCrntSettings] = useState(useContext(SettingsContext).settings)

    let saveSettings = function(setSettings) {
        setSettings({font: crntSettings.font, color: crntSettings.color});
    }

    function FontItem({name, setting, children, currentFont}) {
        return <>
            <input type="radio" name={setting}
                   id={name}
                   value={name}
                   checked={crntSettings.font===name}
                   onChange={() => setCrntSettings(prevSettings=>({...prevSettings, font: name}))}/>
            <label htmlFor={name} className={`${name}-${setting} ${setting}`}>{children}</label>
        </>
    }
    function ColorItem({name, setting, children, currentColor}) {
        return <>
            <input type="radio" name={setting}
                   id={name}
                   value={name}
                   checked={crntSettings.color===name}
                   onChange={() => setCrntSettings(prevSettings=>({...prevSettings, color: name}))}/>
            <label htmlFor={name} className={`${name}-${setting} ${setting}`}>{children}</label>
        </>
    }
    function CheckIcon() {
        return <MdCheck className="color-settings_check"/>
    }

    return (
        <SettingsContext.Consumer>
            {({settings, setSettings}) => (
                <div className="settings">
                    <button className="settings__button icon-button" onClick={()=>{setShow(true)}}>
                        <MdSettings className= "settings__button-icon"/>
                    </button>
                    {show?
                    <Modal show={show} title="Settings"
                           onClose={()=>{setShow(false)}}
                           actionName="Apply"
                           actionFunction={(e)=>{
                               e.preventDefault();
                               saveSettings(setSettings);
                               setShow(false);
                            }
                           }>

                        <div className="modal__menu-item modal__menu-item_first">
                            <h2>Time</h2>
                        </div>
                        <div className="modal__menu-item">
                            <h2>Font</h2>
                            <FontItem name="sans" setting="font" currentFont={settings.font}>Aa</FontItem>
                            <FontItem name="roboto" setting="font" currentFont={settings.font}>Aa</FontItem>
                            <FontItem name="monospace" setting="font" currentFont={settings.font}>Aa</FontItem>
                        </div>
                        <div className="modal__menu-item">
                            <h2>Color</h2>
                            <ColorItem name="red" setting="color" ><CheckIcon/></ColorItem>
                            <ColorItem name="blue" setting="color"><CheckIcon/></ColorItem>
                            <ColorItem name="purple" setting="color" ><CheckIcon/></ColorItem>
                        </div>

                    </Modal>
                    :<></>}
                </div>
                )
            }
        </SettingsContext.Consumer>
    );
}

export default Settings;
