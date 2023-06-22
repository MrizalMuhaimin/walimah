import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


import PrivateRoute from './PrivateRoute';
import HomePageLayout from '../layouts/HomePageLayout';


import LandingPage from '../pages/LandingPage';
import About from '../pages/About';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';


export default function CustomRouter () {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePageLayout><LandingPage/></HomePageLayout>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/login" element={<Login/>} />
        
        {/* Route for admin */}
        <Route
        >
          <Route exact path="/dashboard" element={<PrivateRoute element={<Dashboard/>} />} />
        </Route>

      </Routes>

    </Router>
  );
}