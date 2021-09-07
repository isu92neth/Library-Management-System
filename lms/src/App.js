import { Header, Main, Footer } from "./components/Layout";
import { NavBar, NavItem, NavLink } from "./components/Navbar";
function App() {
  return (
    <>
      <Header>
        <NavBar>
          <NavItem href="#">
            <NavLink>Catalog</NavLink>
          </NavItem>
          <NavItem href="#">
            <NavLink>Dashboard</NavLink>
          </NavItem>
        </NavBar>
      </Header>
      <Main>This is the Main</Main>
      <Footer>This is the Footer</Footer>
    </>
  );
}

export default App;
