import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./views/landingpage.js";
import AboutUs from "./views/aboutus.js";
import ReactGA from "react-ga4";

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

ReactGA.initialize("G-0WG3FT4K4Q");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/aboutus">
          <AboutUs />
        </Route>

        {/* If none of the paths match, fallback to the landing page by default */}
        <Route path="/">
          <LandingPage/>
        </Route>
      </Switch>

    </BrowserRouter>
  </React.StrictMode>
);

