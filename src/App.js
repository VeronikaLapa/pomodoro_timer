import './App.scss';
import Name from "./Name";
import TypeMenu from "./TypeMenu";
import Timer from "./Timer";
import Settings from "./Settings";
import FontProvider from "./providers/FontProvider";
import {FontContext} from "./сontexts/FontContext";
import { useState} from "react";

function App() {
    let [limit, setLimit] = useState({limit: 15});
    let resetTimer = function(newLimit) {
        setLimit({limit: newLimit});
    }
  return (
      <FontProvider>
          <FontContext.Consumer>
              {({font}) => (
                  <div className={`${font}-font app`}>
                      <Name/>
                      <TypeMenu resetTimer={resetTimer}/>
                      <Timer limit={limit.limit}/>
                      <Settings/>
                  </div>

              )}
          </FontContext.Consumer>
      </FontProvider>
  );
}

export default App;
