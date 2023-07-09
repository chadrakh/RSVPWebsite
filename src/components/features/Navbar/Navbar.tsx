import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1%;
  margin-bottom: 1vh;
`;

const LeftNav = styled.div`
  display: flex;
  align-items: center;
`;

const RightNav = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: white;
  font-size: large;
  margin-left: 2em;
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

const HomeLink = styled(NavLink)`
  margin-left: 0;
  font-family: "Parisienne", sans-serif;
`;

const NavBar = () => {
  return (
    <>
      <Nav>
        <LeftNav>
          <HomeLink to="/">J & D</HomeLink>
        </LeftNav>
        <RightNav>
          <NavLink to="/rsvp">RSVP</NavLink>
          <NavLink to="/itinerary">Itinerary</NavLink>
          {/* <NavLink to="/wedding-team">Wedding Team</NavLink> */}
          <NavLink to="/gallery">Gallery</NavLink>
        </RightNav>
      </Nav>
    </>
  );
};

export default NavBar;