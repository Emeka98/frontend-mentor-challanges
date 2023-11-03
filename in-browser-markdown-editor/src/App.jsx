import Navbar from "./components/Navbar";
import AsideBar from "./components/AsideBar";
import Content from "./components/Content";
function App() {
  return (
    <div className="min-h-screen w-screen overflow-hidden">
      <AsideBar />
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
