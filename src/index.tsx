import { render } from "solid-js/web";

import "./index.css";
import App from "./pages/App";
import { Route, Router } from "@solidjs/router";
import NotFound from "./pages/404";

const root = document.getElementById("root");

render(
  () => (
    <Router>
      <Route path="/" component={App} />
      {/* お試し */}
      <Route path="/about" component={App} />
      {/* 404 */}
      <Route path="/*" component={NotFound} />
    </Router>
  ),
  root!
);
