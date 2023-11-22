import { DataContextProvider } from "./components/context/useData";
import ClockApp from "./components/ClockApp";
function App() {
  return (
    <>
      <DataContextProvider>
        <ClockApp />
      </DataContextProvider>
    </>
  );
}

export default App;
