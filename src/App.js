import { TaskProvider } from "./context/TaskContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TaskItemPage from "./components/TaskItemPage";
import Home from "./components/Home";
import { PopupDisplayProvider } from "./context/PopupDisplayContext";

function App() {
  return (
    <TaskProvider>
      <PopupDisplayProvider>
        <div className="container">
          <Router>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/:id" exact>
                <TaskItemPage />
              </Route>
            </Switch>
          </Router>
        </div>
      </PopupDisplayProvider>
    </TaskProvider>
  );
}

export default App;
