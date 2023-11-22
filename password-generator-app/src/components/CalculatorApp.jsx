import React, { useEffect } from "react";
import { useState } from "react";
// Components
import FormHeader from './FormHeader'
import FormSection from "./FormSection";
import { generatePassword } from "./generatePassword"; 
function CalculatorApp() {
  const [password , setPassword] = useState('')




  const onSubmit = (values) => {
    const newPassword = generatePassword(values);
    setPassword(newPassword);
  };



  return (
    <div className="container">
      <FormHeader password={password}  />
      <FormSection onSubmit={onSubmit}  />
    </div>
  );
}

export default CalculatorApp;
