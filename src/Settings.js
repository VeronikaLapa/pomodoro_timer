import React from 'react';
import { MdSettings } from 'react-icons/md'
import "./Settings.scss"

function Settings(props) {
    return (
        <div className="settings">
                <MdSettings class="settings__button"/>
        </div>
    );
}

export default Settings;
