import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import ExerciseList from "./components/exercise-list.component";
import ExerciseEdit from "./components/exercise-edit.component";
import ExerciseCreate from "./components/exercise-create.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <div className="container">
        <Route path="/" exact component={ExerciseList} />
        <Route path="/edit/:id" component={ExerciseEdit} />
        <Route path="/create" component={ExerciseCreate} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
