import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import Home from "./pages/HomePage";
function App() {
  return (
    <Provider store={store}>
      <div>
        <Home />
      </div>
    </Provider>
  );
}

export default App;
