import "./App.css";
import React, { useState } from "react";
import Navbar from "./component/Navbar";
// import About from "./component/About";
import Formtext from "./component/Formtext";

function App() {
  const [mode, setMode] = useState('light');

  const tooglemode = () => {
    if (mode === 'light') {
      setMode('dark')

      document.body.style.background = "black"

      // setText('white')

    } else {
      setMode('light')
      document.body.style.background = "white"
      // setText('dark')

    }

  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} tooglemode={tooglemode} />
      <div className="container my-5">
        <Formtext heading="TextUtils React App"  mode={mode} tooglemode={tooglemode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
