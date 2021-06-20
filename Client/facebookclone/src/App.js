import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store.js";

function App() {
  return (
    <Provider store={store}>
      <div className="App">This is the home page</div>;
    </Provider>
  );
}

export default App;
