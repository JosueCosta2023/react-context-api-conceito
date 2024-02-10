import {  createContext, useState } from "react";

export const themes = {
    light:{
        color: 'purple',
        background:'#fff',
        border: '2px solid purple'
    },
    dark:{
        color: '#fff',
        background: 'purple',
        border:'2px solid #fff'
    }
}

export const ThemeContext = createContext({});

export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(themes.light)
    return(
        
        <ThemeContext.Provider value={{theme, setTheme}}>
            { props.children}
        </ThemeContext.Provider>
    )
}