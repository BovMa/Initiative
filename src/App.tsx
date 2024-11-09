import { Leaf, Globe, UserCircle } from 'lucide-react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import InitiativeAppsMenu from './components/InitiativeAppsMenu';
import UserMenu from './components/UserMenu';
import LanguageSelector from './components/LanguageSelector';
import ProtectedRoute from './components/ProtectedRoute';
import UnderConstruction from './components/UnderConstruction';
import JobBoard from './pages/JobBoard';
import JobDetails from './pages/JobDetails';
import Organizations from './pages/Organizations';
import OrganizationDetails from './pages/OrganizationDetails';
import Resources from './pages/Resources';
import HumanitarianResources from './pages/HumanitarianResources';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Footer from './components/Footer';
import { useTranslation } from 'react-i18next';
import './i18n';

function App() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <UnderConstruction />

      {/* Header */}
      <header className="bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg relative">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <NavLink
              to="/"
              className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
            >
              <Leaf className="w-8 h-8" />
              <h1 className="text-2xl font-bold">Initiative Solidaire</h1>
            </NavLink>
            <nav className="flex items-center space-x-6">
              <ul className="flex items-center space-x-6">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `hover:text-green-200 transition-colors ${
                        isActive ? 'text-green-200' : ''
                      }`
                    }
                  >
                    {t('nav.jobs')}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/organizations"
                    className={({ isActive }) =>
                      `hover:text-green-200 transition-colors ${
                        isActive ? 'text-green-200' : ''
                      }`
                    }
                  >
                    {t('nav.organizations')}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `hover:text-green-200 transition-colors ${
                        isActive ? 'text-green-200' : ''
                      }`
                    }
                  >
                    {t('nav.about')}
                  </NavLink>
                </li>
              </ul>
              <div className="flex items-center space-x-4">
                <LanguageSelector />
                <UserMenu />
                <InitiativeAppsMenu />
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<JobBoard />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
          <Route path="/organizations" element={<Organizations />} />
          <Route path="/organizations/:id" element={<OrganizationDetails />} />
          <Route path="/humanitarian-resources" element={<HumanitarianResources />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <UserDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/resources"
            element={
              <ProtectedRoute>
                <Resources />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;