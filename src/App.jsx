import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Tutorials from './pages/Tutorials';
import TutorialDetail from './pages/TutorialDetail';
import Training from './pages/Training';
import Demo from './pages/Demo';
import About from './pages/About';
import Enrollment from './pages/Enrollment';
import ContentstackExample from './pages/ContentstackExample';
import SetupContentstack from './pages/SetupContentstack';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/tutorials/:tutorialSlug" element={<TutorialDetail />} />
          <Route path="/training" element={<Training />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/about" element={<About />} />
          <Route path="/enrollment" element={<Enrollment />} />
          <Route path="/contentstack-example" element={<ContentstackExample />} />
          <Route path="/setup-contentstack" element={<SetupContentstack />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
