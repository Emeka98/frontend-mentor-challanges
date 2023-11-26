import { createContext , useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
 const [theme , setTheme] = useState(true)

 return (
 <ThemeContext.Provider value={{theme , setTheme}}> 
 {children}
 </ThemeContext.Provider>

 )}

 export default ThemeContext