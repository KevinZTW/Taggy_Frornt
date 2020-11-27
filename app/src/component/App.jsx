import "../css/App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Article from "./Article/Aritcle";
import AddArticle from "./AddArticle";
import Signup from "./Member/Signup";
import Main from "./Main";
import FolderTab from "./FolderTab";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/board">
            <header className="App-header">
              <AddArticle className="headMemberIcon" />{" "}
              <Link to={"/signup"}>
                <AccountBoxIcon fontSize="large" style={{ color: "#FFFCEC" }} />
              </Link>
            </header>
            <div className="content">
              <FolderTab />
              <Main />
            </div>
          </Route>
          <Route path="/article" component={Article}></Route>
          <Route path="/signup" component={Signup}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
