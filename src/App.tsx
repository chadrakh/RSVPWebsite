import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/features/Navbar/Navbar';
import { lazy, Suspense } from 'react';
import { Routes as BrowserRoutes, Route } from 'react-router-dom';
import styled from "@emotion/styled";
import background from "./assets/background-dark-overlay.jpg";
import PasswordProtection from './components/common/Password-Protection/PasswordProtection';

const Landing = lazy(async () => await import('./components/pages/landing/Landing'));
const RSVPForm = lazy(async () => await import('./components/pages/rsvp-form/RSVPForm'));
const WeddingTeam = lazy(async () => await import('./components/pages/wedding-team/WeddingTeam'));
const ImageGallery = lazy(async () => await import('./components/pages/image-gallery/ImageGallery'));
// const PageNotFound = lazy(async () => await import('../pages/error/PageNotFound'))

const Background = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: repeat;
  background-attachment: fixed;
  height: 100vh;
  
  position: relative;

  @media (max-width: 660px) {
    height: auto;
  }
`;

const App = () => {

  return (
    <>
    <PasswordProtection>
        <Router>
        <Background>
          <NavBar />
          <Suspense fallback={<div className="container">Loading...</div>}>
            <BrowserRoutes>
              <Route path="/" element={<Landing />} />
              <Route path="/rsvp" element={<RSVPForm />} />
              <Route path="/wedding-team" element={<WeddingTeam />} />
              <Route path="/gallery" element={<ImageGallery />} />
              {/* <Route path="*" element={<PageNotFound />} /> */}
            </BrowserRoutes>
          </Suspense>
        </Background>
      </Router>
      </PasswordProtection>
    </>
  );
};

export default App;
