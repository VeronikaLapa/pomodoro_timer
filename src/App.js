import './App.scss';
import Name from "./Name";
import TypeMenu from "./TypeMenu";
import Timer from "./Timer";
import Settings from "./Settings";

function App() {
  return (
    <div className="app">
      <Name/>
      <TypeMenu/>
      <Timer limit={75}/>
      <Settings/>
    </div>
  );
}

export default App;
