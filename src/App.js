import BottomBar from "./components/BottomBar";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
function App() {
  return (
    <>
      <div className="wrapper">
        <Sidebar/>
        <Content/>
      </div>
      <BottomBar/>
    </>
  );
}

export default App;
