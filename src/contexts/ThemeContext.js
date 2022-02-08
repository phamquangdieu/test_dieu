import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextComponent = ({ children }) => {
  const [value, setValue] = useState({ name: 'Dieu', color: true });
  const changeColor = () => {
    setValue(prev => ({...prev, color: !prev.color}));
  }
  return <ThemeContext.Provider value={{ value, changeColor }}>
    {children}
  </ThemeContext.Provider>
}

export default ThemeContextComponent;