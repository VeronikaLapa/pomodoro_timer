import './App.scss';
import Name from "./Name";
import TypeMenu from "./TypeMenu";
import Timer from "./Timer";
import Settings from "./Settings";
import FontProvider from "./providers/FontProvider";
import {FontContext} from "./сontexts/FontContext";

function App() {
  return (
      <FontProvider>
          <FontContext.Consumer>
              {({font}) => (
                  <div className={`${font}-font app`}>
                      <Name/>
                      <TypeMenu/>
                      <Timer limit={15}/>
                      <Settings/>
                  </div>

              )}
          </FontContext.Consumer>
      </FontProvider>
  );
}

export default App;
