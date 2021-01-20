import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to={"/about/" + (2+2)} >About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about/:id">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
        <p>
        Yellen urges lawmakers to ‘act big’ on stimulus relief at Senate confirmation hearing
        </p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>
      GOP Rep. Lauren Boebert gave Capitol tour to ‘large’ group before the riots, Democratic lawmaker says
      </p>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <p> Melania Trump spends last days in White House focused on her future, while her husband rages about past</p>
    </div>
  );
}
