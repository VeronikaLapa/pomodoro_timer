import './App.scss';
import Name from "./Name";
import TypeMenu from "./TypeMenu";
import Timer from "./Timer";
import Settings from "./Settings";
import SettingsProvider from "../providers/SettingsProvider";
import {SettingsContext} from "../сontexts/SettingsContext";
import { useState} from "react";

function App() {
    let [limit, setLimit] = useState({limit: 15});
    let resetTimer = function(newLimit) {
        setLimit({limit: newLimit});
    }
  return (
      <SettingsProvider>
          <div id="modal-container"/>
          <SettingsContext.Consumer>
              {({settings}) => (
                  <div className={`${settings.font}-font app`}>
                      <Name/>
                      <TypeMenu resetTimer={resetTimer}/>
                      <Timer limit={limit.limit}/>
                      <Settings/>
                  </div>

              )}
          </SettingsContext.Consumer>
      </SettingsProvider>
  );
}

export default App;
