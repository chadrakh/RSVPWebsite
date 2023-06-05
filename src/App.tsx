import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/features/Navbar/Navbar';
import { lazy, Suspense } from 'react'
import { Routes as BrowserRoutes, Route } from 'react-router-dom';

const Landing = lazy(async () => await import('./components/pages/landing/Landing'))
const RSVPForm = lazy(async () => await import('./components/pages/rsvp-form/RSVPForm'))
const WeddingTeam = lazy(async () => await import('./components/pages/wedding-team/WeddingTeam'))
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
        <Route path="/wedding-team" element={<WeddingTeam />} />
        <Route path="/gallery" element={<ImageGallery />} />
        <Route path="/contact" element={<ContactForm />} />
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </BrowserRoutes>
    </Suspense>
    </Router>
  );
};

export default App;
