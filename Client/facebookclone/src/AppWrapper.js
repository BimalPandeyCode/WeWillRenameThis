import store from "./redux/store.js";
import App from './App.js';
import { Provider } from "react-redux";
const AppWrapper = () => {
    
      return (
        <Provider store={store}> 
          <App />
        </Provider>
      )
    }
export default AppWrapper;
