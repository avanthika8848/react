import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [darkmode, setDarkMode] = useState(false);

    const toggleTheme = () => setDarkMode(!darkmode);


    return(
        <ThemeContext.Provider value = {{darkmode,toggleTheme}}>
            <div 
            style={{
                background: darkmode? '#333' : "#fff",
                color: darkmode? '#fff' : "#000",
                minHeight: '100vh',
                padding:'irem'
            }}>
                {children}

            </div>

         </ThemeContext.Provider>   
    )
}
