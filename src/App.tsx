import { BrowserRouter as Router } from 'react-router-dom';
import PasswordProtection from './components/common/Password-Protection/PasswordProtection';
import AppContent from './components/pages/app-content/AppContext';

const App = () => {
  return (
    <>
      <PasswordProtection>
        <Router>
          <AppContent />
        </Router>
      </PasswordProtection>
    </>
  );
};

export default App;