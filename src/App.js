import {
  BrowserRouter as Router, Switch
} from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
function App() {
  return (
    <div >
        <Router>
          <Switch>
            <Router path="/">
                <Home/>
            </Router>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
