// import "core-js";
import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { loadableReady } from "@loadable/component";

import App from "./App";

loadableReady(() => {
  hydrate(
    <BrowserRouter>
        <App componentProps={{}} />
    </BrowserRouter>,
    document.getElementById("root"), 
    ()=>removeScript(false)
  );
});

function removeScript(APP_DATA) {
  if(APP_DATA) {
    APP_DATA.parentNode.removeChild(APP_DATA)
  }
}

