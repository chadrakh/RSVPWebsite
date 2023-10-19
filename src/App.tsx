import { BrowserRouter as Router } from 'react-router-dom';
// import PasswordProtection from './components/common/Password-Protection/PasswordProtection';
import Background from './components/common/Background/Background';
import { Routes as BrowserRoutes, Route } from 'react-router-dom';
import NavBar from './components/features/Navbar/Navbar';
import Landing from './components/pages/landing/Landing';
import RSVPForm from './components/pages/rsvp-form/RSVPForm';
import Directions from './components/pages/directions/Directions';
// import WeddingTeam from './components/pages/wedding-team/WeddingTeam';
import Itinerary from './components/pages/itinerary/Itinerary';
import ImageGallery from './components/pages/image-gallery/ImageGallery';

const App = () => {
  return (
    <>
      {/* <PasswordProtection> */}
        <Router>
          <Background>
            <NavBar />
            <BrowserRoutes>
              <Route path="/" element={<Landing />} />
              <Route path="/rsvp" element={<RSVPForm />} />
              <Route path="/directions" element={<Directions />} />
              {/* <Route path="/wedding-team" element={<WeddingTeam />} /> */}
              <Route path="/itinerary" element={<Itinerary />} />
              <Route path="/gallery" element={<ImageGallery />} />
            </BrowserRoutes>
          </Background>
        </Router>
      {/* </PasswordProtection> */}
    </>
  );
};

export default App;