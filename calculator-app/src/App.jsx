import CalculatorApp from "./components/CalculatorApp";
import { DataContextProvider } from "./context/ContextData";

function App() {
  return (
    <>
      <DataContextProvider>
        <CalculatorApp />
      </DataContextProvider>
    </>
  );
}

export default App;
