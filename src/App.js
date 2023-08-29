import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Journal from "./pages/Journal";
import QuillBot from "./pages/Journals/Quillbot";
import SearchResults from "./pages/SearchResults";
import Works from "./pages/Works";
import WorksInside from "./pages/WorksInside";
import page404 from "./pages/404";
import UserInterface from "./pages/UserInterface";
import Yono from "./pages/Journals/Yono";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path={`${process.env.PUBLIC_URL + "/"}`}
          component={Home}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL + "/about"}`}
          component={About}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL + "/about"}`}
          component={About}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL + "/contacts"}`}
          component={Contacts}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL + "/journal"}`}
          component={Journal}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL + "/ux-quillbot-case-study"}`}
          component={QuillBot}
        />

        <Route
          exact
          path={`${process.env.PUBLIC_URL + "/ux-yono-case-study"}`}
          component={Yono}
        />

        <Route
          exact
          path={`${process.env.PUBLIC_URL + "/search-results"}`}
          component={SearchResults}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL + "/works"}`}
          component={Works}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL + "/ui"}`}
          component={UserInterface}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL + "/works-inside"}`}
          component={WorksInside}
        />
        <Route exact component={page404} />
      </Switch>
    </Router>
  );
}

export default App;
