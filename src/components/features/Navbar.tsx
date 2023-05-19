import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding: 1%;
`;

const NavLink = styled(Link)`
  color: white;
  margin-left: 20px;
  text-decoration: none;
  position: relative;
  &:hover {
    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: -2px;
      background-color: white;
      animation: underline 0.6s forwards;
    }
  }
  @keyframes underline {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }
`;

const NavBar = () => {
  return (
    <Nav>
      <NavLink to="/">RSVP</NavLink>
      <NavLink to="/bridal-team">Bridal Team</NavLink>
      <NavLink to="/gallery">Gallery</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </Nav>
  );
};

export default NavBar;
