import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Blogs from "./components/Blogs/Blogs";
import Contact from "./components/Contact/Contact";
import Home from './components/Home/Home';
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/blogs">
          <Blogs />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
