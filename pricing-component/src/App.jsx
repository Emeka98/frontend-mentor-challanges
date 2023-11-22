import React, { useState } from "react";
import Pricing from "./Components/Pricing";
import Cards from "./Components/Cards";

function App() {
  const [pricing, setPricing] = useState(true);
  return (
    <div className="relative w-full min-h-screen bg-grayWhite  overflow-hidden ">
      <div className="flex flex-col items-center px-6 pt-16 before after">
        <Pricing setPricing={setPricing} pricing={pricing} />
        <Cards pricing={pricing} />
      </div>
    </div>
  );
}
export default App;
