import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import { DataContextProvider } from "./context/dataContext";

function App() {
  return (
    <>
      <DataContextProvider>
        <RouterProvider router={routes} />
      </DataContextProvider>
    </>
  );
}

export default App;
