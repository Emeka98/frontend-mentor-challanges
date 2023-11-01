import { useData } from "./context/DataContext";

function App() {
  const { theme } = useData();
  console.log(theme)
  return (
    <>
      <p className="text-red-500">Test</p>
    </>
  );
}

export default App;
