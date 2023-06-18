import NavBar from './components/features/Navbar/Navbar';
import { lazy, Suspense } from 'react';
import { Routes as BrowserRoutes, Route } from 'react-router-dom';
import styled from '@emotion/styled';
// import background from "./assets/background-dark-overlay.jpg";
import { handleRSVPFormSubmit } from './store/util/rsvpUtils';

const Landing = lazy(async () => await import('./components/pages/landing/Landing'));
const RSVPForm = lazy(async () => await import('./components/pages/rsvp-form/RSVPForm'));
const WeddingTeam = lazy(async () => await import('./components/pages/wedding-team/WeddingTeam'));
const ImageGallery = lazy(async () => await import('./components/pages/image-gallery/ImageGallery'));
const ContactForm = lazy(async () => await import('./components/pages/contact-form/ContactForm'));
// const PageNotFound = lazy(async () => await import('../pages/error/PageNotFound'))

const Background = styled.div`
  background-image: url();
  background-size: cover;
  background-position: center;
  height: 100vh;
  position: relative;
`;

const App = () => {

  return (
      <BrowserRoutes>
        <Background>
          <NavBar />
          <Suspense fallback={<div className="container">Loading...</div>}>
            <BrowserRoutes>
              <Route path="/" element={<Landing />} />
              <Route
                  path="/rsvp"
                  element={<RSVPForm onSubmit={handleRSVPFormSubmit} />}
              />
              <Route path="/wedding-team" element={<WeddingTeam />} />
              <Route path="/gallery" element={<ImageGallery />} />
              <Route path="/contact" element={<ContactForm />} />
              {/* <Route path="*" element={<PageNotFound />} /> */}
            </BrowserRoutes>
          </Suspense>
        </Background>
      </BrowserRoutes>
  );
};

export default App;
