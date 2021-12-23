import React, { useState } from "react";
import LayoutContext from "../context/LayoutContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [isColumn, setIsColumn] = useState(true);
  const styleLayoutColumn = {
    flexDirection: isColumn ? "column" : "row",
  };

  return (
    <LayoutContext.Provider value={[isColumn, setIsColumn]}>
      <div className="App" style={styleLayoutColumn}>
        <Component {...pageProps} />
      </div>
    </LayoutContext.Provider>
  );
}

export default MyApp;
