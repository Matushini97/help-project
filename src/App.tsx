import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from "./Components/Navbar"
import Main from "./Components/Main"



function App() {
    const [darkMode, setDarkMode] = useState(true)

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode)
    }


    return (
        <div className='container'>
            <Navbar
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
            />
            <Main darkMode={darkMode} />
        </div>
  );
}

export default App;


