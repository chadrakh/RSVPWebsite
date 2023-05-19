import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/features/Navbar';
import { lazy, Suspense } from 'react'
import { Routes as BrowserRoutes, Route } from 'react-router-dom';

const Landing = lazy(async () => await import('./components/pages/landing/Landing'))
const RSVPForm = lazy(async () => await import('./components/pages/rsvp-form/RSVPForm'))
const BridalTeam = lazy(async () => await import('./components/pages/bridal-team/BridalTeam'))
const ImageGallery = lazy(async () => await import('./components/pages/image-gallery/ImageGallery'))
const ContactForm = lazy(async () => await import('./components/pages/contact-form/ContactForm'))
// const PageNotFound = lazy(async () => await import('../pages/error/PageNotFound'))

const App = () => {
  return (
    <Router>
    <NavBar />
    <Suspense fallback={<div className="container">Loading...</div>}>
      <BrowserRoutes>
        <Route path="/" element={<Landing />} />
        <Route path="/rsvp" element={<RSVPForm />} />
        <Route path="/bridal-team" element={<BridalTeam />} />
        <Route path="/gallery" element={<ImageGallery />} />
        <Route path="/contact" element={<ContactForm />} />
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </BrowserRoutes>
    </Suspense>
    </Router>
  );
};

export default App;
