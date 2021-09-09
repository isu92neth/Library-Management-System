import styled from "styled-components";

export const NavBar = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: ${(props) => props.theme.primary.main};
  position:fixed;
  top:0;
  width:100%;
  z-index:1;
`;

export const NavItem = styled.li`
  float: left;
`;

export const NavLink = styled.a`
  display: black;
  color: ${(props) => props.theme.primary.textColor};
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;

  :hover {
    background-color: ${(props) => props.theme.primary.light};
  }

  .active {
    background-color: ${(props) => props.theme.primary.dark};
  }
`;
