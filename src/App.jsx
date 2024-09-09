import React, { useState, useEffect } from "react";
import Earth from "./components/Earth.jsx";
import Navlist from "./components/Navlist.jsx";
import Display from "./components/Display.jsx";
import Loader from "./components/Loader.jsx"; 

function App() {
  const [hover, setHover] = useState(false);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer); 
  }, []);

  const mouseenter = (name) => {
    setName(name);
    setHover(true);
  };

  const mouseout = () => {
    setName("");
    setHover(false);
  };

  return (
    <div className="flex md:flex-row flex-col justify-center items-center">
      {loading ? (
        <Loader /> 
      ) : (
        <>
          {hover ? <Display name={name} /> : <Earth />}
          <Navlist onenter={mouseenter} onleave={mouseout} />
        </>
      )}
    </div>
  );
}

export default App;
