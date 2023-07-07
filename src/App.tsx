import "./App.css";
import { Route } from "./router/Route";
import { Router } from "./router/Router";
import Root from "./pages/Root";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Route path="/" component={<Root />} />
      <Route path="/about" component={<About />} />
    </Router>
  );
}

export default App;
