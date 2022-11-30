import './App.css';
import { useState } from 'react';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
import {
  Routes,
  BrowserRouter,
  Route,
} from "react-router-dom";
import About from './components/About';
import Footer from './components/Footer';

function App() {

  // Setting Alert functinality
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  // Setting Theme Type
  const [theme, setTheme] = useState("light")
  const [themeText, setThemeText] = useState("Dark Theme")

  const themeToggle = () => {
    if (theme === "light") {
      document.body.style.backgroundColor = "#040b48"
      setTheme("dark")
      setThemeText("Light Theme")
      showAlert('Dark Theme Enabled', 'secondary')
    } else {
      document.body.style.backgroundColor = "#9d90fa30"
      setTheme("light")
      setThemeText("Dark Theme")
      showAlert('Light Theme Enabled', 'secondary')
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar showAlert={showAlert} themeText={themeText} theme={theme} themeToggle={themeToggle} />
        <Alert alert={alert} />
        <Routes>
          <Route path='/' element={<TextBox showAlert={showAlert} theme={theme} />} />
          <Route path='/about' element={<About theme={theme} />} />
        </Routes>
        <Footer theme={theme} />
      </BrowserRouter>
    </>
  );
}

export default App;
