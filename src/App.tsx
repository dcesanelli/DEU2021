import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Congrats from "./pages/Congrats";
import Game from "./pages/Game";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/final">
            <Congrats />
          </Route>
          <Route path="/juego">
            <Game />
          </Route>
          <Route path="/">
            <Game />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
