import React, {useState} from 'react';
import { MdSettings } from 'react-icons/md'
import "./Settings.scss"
import Modal from "./Modal";

function Settings(props) {
    let [show, setShow] = useState(false);
    return (
        <div className="settings">
            <button className="settings__button icon-button" onClick={()=>{setShow(true)}}>
                <MdSettings className= "settings__button-icon"/>
            </button>
            <Modal show={show} title="Settings" onClose={()=>{setShow(false)}} actionName="Apply" actionFunction={()=>{}}>

                <div className="modal__menu-item modal__menu-item_first">
                    <h2>Time</h2>
                </div>
                <div className="modal__menu-item">
                    <h2>Font</h2>
                    <input type="radio" name="font" id="radio1"/>
                    <label htmlFor="radio1">Aa</label>
                    <input type="radio" name="font" id="radio2"/>
                    <label htmlFor="radio2">Aa</label>
                    <input type="radio" name="font" id="radio3"/>
                    <label htmlFor="radio3">Aa</label>
                </div>
                <div className="modal__menu-item">
                    <h2>Color</h2>
                </div>

            </Modal>
        </div>
    );
}

export default Settings;
