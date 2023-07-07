import { useEffect, useState } from 'react';
import { Routes as BrowserRoutes, Route, useLocation } from 'react-router-dom';
import Background from '../../common/Background/Background';
import NavBar from '../../features/Navbar/Navbar';
import Landing from '../landing/Landing';
import RSVPForm from '../rsvp-form/RSVPForm';
import ImageGallery from '../image-gallery/ImageGallery';

const AppContent = () => {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState('Becoming Mombili');

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setPageTitle('Home');
        break;
      case '/rsvp':
        setPageTitle('RSVP');
        break;
      case '/gallery':
        setPageTitle('Gallery');
        break;
      default:
        setPageTitle('Becoming Mombili');
        break;
    }
  }, [location.pathname, pageTitle]);

  return (
    <Background>
      <NavBar />
      <BrowserRoutes>
        <Route path="/" element={<Landing />} />
        <Route path="/rsvp" element={<RSVPForm />} />
        <Route path="/gallery" element={<ImageGallery />} />
      </BrowserRoutes>
    </Background>
  );
};

export default AppContent;