import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

// import { 
//     BrowserRouter as Router,
//     Routes,
//     Switch,
//     Route,
//     NavLink, 
//     useRoutes} from "react-router-dom";




function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("dark mode has been enabled", "success");
    } else if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <TextForm
          heading="Enter the Text To Analyze"
          mode={mode}
          showAlert={showAlert}
        />
      </div>
      {/* <About mode={mode} /> */}
    </>
  );
}


export default App;









// function App() {
// const [mode, setMode] = useState("light");
// const [alert, setAlert] = useState(null);

// const showAlert = (message, type) => {
//   setAlert({
//     msg: message,
//     type: type,
//   });
//   setTimeout(() => {
//     setAlert(null);
//   }, 2500);
// };
// const toggleMode = () => {
//   if (mode === "light") {
//     setMode("dark");
//     document.body.style.backgroundColor = "black";
//     showAlert("dark mode has been enabled", "success");
//   } else if (mode === "dark") {
//     setMode("light");
//     document.body.style.backgroundColor = "white";
//     showAlert("light mode has been enabled", "success");
//   }
// };
// return (
//   <>
//   <Router>
//     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
//     <Alert alert={alert} />
//     <Routes>
//     <Route exact path="/" element={<TextForm
//         heading="Enter the Text To Analyze"
//         mode={mode}
//         showAlert={showAlert}
//          />} />
//          <Route exact path="/about" element={<About mode={mode} />} />
    
//         </Routes>
//         </Router>
//   </>
// );
// }


// export default App;