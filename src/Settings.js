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
            <Modal show={show} title="Settings" onClose={()=>{setShow(false)}}>
                <form>
                    <div>
                        <h2>Time</h2>
                    </div>
                    <div>
                        <h2>Font</h2>
                    </div>
                    <div>
                        <h2>Color</h2>
                    </div>
                </form>
            </Modal>
        </div>
    );
}

export default Settings;
