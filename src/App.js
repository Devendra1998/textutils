import { useState } from 'react/cjs/react.development';
import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light'); //whether dark mode enable or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode Enabled", "success");
      document.title = 'TextUtil-DarkMode';
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "success");
      document.title = 'TextUtil-lightMode';
    }
  }

  return (
    <>
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Switch>
          <Route exact path="/">
            <TextForm heading="Enter the text to Analyze" mode={mode} />
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
