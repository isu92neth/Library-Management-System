import React from "react";
import { ThemeProvider } from "styled-components";
import { BsBookHalf } from "react-icons/bs";

import { Main, Footer } from "./components/Layout";
import { NavBar, NavItem, NavLink } from "./components/Navbar";

import Dashboard from "./containers/Dashboard";

function App() {
  const theme = {
    primary: {
      main: "#29b6f6",
      light: "#73e8ff",
      dark: "#0086c3",
      textColor: "#000",
    },
    secondary: {
      main: "#fff",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <NavBar>
        <NavItem href="#">
          <NavLink>
            <BsBookHalf />
          </NavLink>
        </NavItem>
        <NavItem href="#">
          <NavLink>Catalog</NavLink>
        </NavItem>
        <NavItem href="#">
          <NavLink>Dashboard</NavLink>
        </NavItem>
      </NavBar>

      <Main>
        This is the Main
        <Dashboard />
      </Main>
      <Footer>This is the Footer</Footer>
    </ThemeProvider>
  );
}

export default App;
