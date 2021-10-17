import { Switch, Route } from "react-router-dom";
import Home2 from "./pages/Home2";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home2 />
        </Route>
        <Route exact path="/addUser">
          <AddUser />
        </Route>
        <Route exact path="/editUser/:id">
          <EditUser />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
