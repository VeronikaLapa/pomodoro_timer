import React, {useState} from 'react';
import { MdSettings } from 'react-icons/md'
import "./Settings.scss"
import Modal from "./Modal";
import {FontContext, fonts} from "./сontexts/FontContext";

function Settings(props) {
    let [show, setShow] = useState(false);

    return (
        <FontContext.Consumer>
            {({font, setFont}) => (
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
                            <input type="radio" name="font"
                                   id="sans"
                                   value="sans"
                                   checked={font==='sans'}
                                   onChange={() => setFont(fonts.sans)}/>
                            <label htmlFor="sans" className="sans-font">Aa</label>
                            <input type="radio" name="font"
                                   id="roboto"
                                   value="roboto"
                                   checked={font==='roboto'}
                                   onChange={()=> setFont(fonts.roboto)}/>
                            <label htmlFor="roboto" className="roboto-font">Aa</label>
                            <input type="radio" name="font"
                                   id="monospace"
                                   value="monospace"
                                   checked={font==='monospace'}
                                   onChange={() => setFont(fonts.monospace)}/>
                            <label htmlFor="monospace" className="monospace-font">Aa</label>
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
