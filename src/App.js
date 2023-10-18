import Panel from "./components/panel/Panel";
import Sidebar from "./components/sidebar/Sidebar";
import "./style.css";
import '../src/assets/js/script'

function App() {
  return (
    <div style={{display:'flex'}}>
      <Sidebar />
      <Panel />
    </div>
  );
}

export default App;
