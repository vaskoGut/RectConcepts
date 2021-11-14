import { render } from "react-dom";
import { configureStore } from "@reduxjs/toolkit"; // it used to make basic settings
import { Provider } from "react-redux"; /*  it used to 
determine which componenent will have access to the store */
import userReducer from "../src/reduxExplanation/features/user";
import colorReducer from "../src/reduxExplanation/features/theme";

const ourStore = configureStore({
  reducer: {
    // below we can have many reducers
    user: userReducer,
    theme: colorReducer
  } // it includes some information about current state, it also includes info aout action that you want to perform with that state
});

import App from "./App";

const rootElement = document.getElementById("root");
render(
  <Provider store={ourStore}>
    <App />
  </Provider>,
  rootElement
);
