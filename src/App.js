import React from "react";
import { Route } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import NewsPage from "./pages/NewsPage";
import AskPage from "./pages/AskPage";
import Showpage from "./pages/Showpage";
import UserInfoPage from "./pages/UserInfoPage";

function App() {
  return (
    <div>
      <AppHeader></AppHeader>
      <Route path="/" component={NewsPage} exact />
      <Route path="/ask" component={AskPage} />
      <Route path="/show" component={Showpage} />
      <Route path="/user/:name" component={UserInfoPage} />
    </div>
  );
}

export default App;
