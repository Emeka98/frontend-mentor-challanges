import MainPage from "./components/MainPage";
import { DataContextProvider } from "./components/context/ThemeContext";
function App() {
  return (
   <>
      <DataContextProvider>
        <MainPage />
      </DataContextProvider>
    </>
  );
}

export default App;
