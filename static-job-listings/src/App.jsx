import JobListings from "./components/JobListings";
import Data from "../data.json";
function App() {
  return (
    <div className="w-full h-full bg-[#EFFAFA]  ">
      <JobListings data={Data} />
    </div>
  ); 
}

export default App;
