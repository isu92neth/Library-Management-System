import React, { Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { BsBookHalf } from "react-icons/bs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header, Main, Footer } from "./components/Layout";
import { NavBar, NavItem, NavLink } from "./components/Navbar";
import Spinner from "./components/Spinner";

import { DASHBOARD, CATALOG } from "./shared/routes";

const Dashboard = React.lazy(() => {
  return import("./containers/Dashboard/index");
});

const NotFound = React.lazy(() => {
  return import("./containers/404");
});

function App() {
  const theme = {
    primary: {
      main: "#17629c",
      light: "#6ca2cc",
      dark: "#1a4566",
      textColor: "#000",
      danger: "#e91e63",
      dangerDark: "#b0003a",
    },
    secondary: {
      main: "#fff",
    },
    spacing: (factor) => `${factor * 8}px`,
  };

  let routes = (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path={DASHBOARD} component={Dashboard} />

        <Route exact path={CATALOG} component={Spinner} />
        <Route exact path="/" component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );

  return (
    <ThemeProvider theme={theme}>
      <Header>
        <NavBar>
          <NavItem>
            <NavLink href={CATALOG}>
              <BsBookHalf />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href={CATALOG}>Catalog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href={DASHBOARD}>Dashboard</NavLink>
          </NavItem>
        </NavBar>
      </Header>

      <Main>
        <Router>{routes}</Router>
      </Main>
      <Footer>Copyright {new Date().getFullYear()} @Spark Academy</Footer>
    </ThemeProvider>
  );
}

export default App;
