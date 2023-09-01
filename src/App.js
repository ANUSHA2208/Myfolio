import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Journal from "./pages/Journal";
import QuillBot from "./pages/Journals/Quillbot";
import SearchResults from "./pages/SearchResults";
import Works from "./pages/Works";
import page404 from "./pages/404";
import UserInterface from "./pages/UserInterface";
import Yono from "./pages/Journals/Yono";
import nft from "./pages/Journals/NFT";
import Metaverse from "./pages/Journals/Metaverse";
import Glasses from "./pages/WorksInside/UI Designs/Glasses";
import Music from "./pages/WorksInside/UI Designs/Music";
import Ecom from "./pages/WorksInside/UI Designs/Ecom";
import Chatgpt from "./pages/WorksInside/UI Designs/Chatgpt";
import Ums from "./pages/WorksInside/Product/Ums";
import Digi from "./pages/WorksInside/Product/Digi";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
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
          path={`${process.env.PUBLIC_URL + "/ux-research"}`}
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
          path={`${process.env.PUBLIC_URL + "/ux-nft-case-study"}`}
          component={nft}
        />

        <Route
          exact
          path={`${process.env.PUBLIC_URL + "/Tech-metaverse"}`}
          component={Metaverse}
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
          path={`${process.env.PUBLIC_URL + "/work-ui-design-glasses"}`}
          component={Glasses}
        />

        <Route
          exact
          path={`${process.env.PUBLIC_URL + "/work-ui-design-music"}`}
          component={Music}
        />

        <Route
          exact
          path={`${process.env.PUBLIC_URL + "/work-ui-design-ecom"}`}
          component={Ecom}
        />

        <Route
          exact
          path={`${process.env.PUBLIC_URL + "/work-ui-design-chatgpt"}`}
          component={Chatgpt}
        />

        <Route
          exact
          path={`${process.env.PUBLIC_URL + "/work-product-design-ums"}`}
          component={Ums}
        />

<Route
          exact
          path={`${process.env.PUBLIC_URL + "/work-product-design-digi"}`}
          component={Digi}
        />

        <Route exact component={page404} />
      </Switch>
    </Router>
  );
}

export default App;
