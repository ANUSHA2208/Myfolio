import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/ux-research" element={<Journal />} />
        <Route path="/ux-quillbot-case-study" element={<QuillBot />} />
        <Route path="/ux-yono-case-study" element={<Yono />} />
        <Route path="/ux-nft-case-study" element={<nft />} />
        <Route path="/Tech-metaverse" element={<Metaverse />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/works" element={<Works />} />
        <Route path="/ui" element={<UserInterface />} />
        <Route path="/work-ui-design-glasses" element={<Glasses />} />
        <Route path="/work-ui-design-music" element={<Music />} />
        <Route path="/work-ui-design-ecom" element={<Ecom />} />
        <Route path="/work-ui-design-chatgpt" element={<Chatgpt />} />
        <Route path="/work-product-design-ums" element={<Ums />} />
        <Route path="/work-product-design-digi" element={<Digi />} />
        <Route path="*" element={<page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
