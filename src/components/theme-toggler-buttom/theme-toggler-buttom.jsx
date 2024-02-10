import React ,{ useContext } from "react"
import { ThemeContext, themes } from "../../contexts/theme-context"
import { Button } from "../button/button"

export const ThemeTogglerButton = () => {  
    const { theme, setTheme }  = useContext(ThemeContext)
    return(
        <div>
            <Button onClick={() => 
            // Se theme atual for igual a light então ao clicar ira alterar para dark e vice versa.
                setTheme( theme === themes.light ?   themes.dark : themes.light)} 
                >
                    Toggle Theme
            </Button>
        </div>
    )
}