import './App.css'
import { ThemeProvider } from './contexts/theme-context'
import { ThemeTogglerButton } from './components/theme-toggler-buttom/theme-toggler-buttom'
import { Card }  from './components/card/card'

function App() {
  return (
    <>
        <ThemeProvider>
              <ThemeTogglerButton/>
              <Card/>
        </ThemeProvider>
    </>
  )
}


export default App
