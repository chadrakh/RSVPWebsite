import { lazy, Suspense } from 'react'
import { Routes as BrowserRoutes, Route } from 'react-router-dom';

const Landing = lazy(async () => await import('../pages/landing/Landing'))
const RSVPForm = lazy(async () => await import('../pages/rsvp-form/RSVPForm'))
const BridalTeam = lazy(async () => await import('../pages/bridal-team/BridalTeam'))
const ImageGallery = lazy(async () => await import('../pages/image-gallery/ImageGallery'))
const ContactForm = lazy(async () => await import('../pages/contact-form/ContactForm'))
// const PageNotFound = lazy(async () => await import('../pages/error/PageNotFound'))

export const Routes = () => {
  return (
    <>
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
    </>
  );
};