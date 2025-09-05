import React from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import Home from './pages/Home'
import Home2 from './pages/Home2'
import About from './pages/About'
import Services from './pages/Services'
import Blog from './pages/Blog'
import BlogPost1 from './pages/BlogPost1'
import BlogPost2 from './pages/BlogPost2'
import BlogPost3 from './pages/BlogPost3'
import Contact from './pages/Contact'
import AdminDashboard from './pages/admin-dashboard'
import WebsiteDevelopment from './pages/WebsiteDevelopment'
import EcommerceSolutions from './pages/EcommerceSolutions'
import BrandingDesign from './pages/BrandingDesign'
import ContentCopywriting from './pages/ContentCopywriting'
import DigitalMarketing from './pages/DigitalMarketing'
import OngoingSupport from './pages/OngoingSupport'
import NotFound from './pages/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import AdminProtectedRoute from './components/AdminProtectedRoute'
import { ThemeProvider } from './components/theme-provider'
import ScrollToTop from './components/ScrollToTop'
import { debugRoute } from './utils/debug'

// Component to handle route debugging
function RouteDebugger() {
  const location = useLocation();
  
  React.useEffect(() => {
    console.log('🛣️ Route changed to:', location.pathname);
    debugRoute(location.pathname);
  }, [location.pathname]);
  
  return null;
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <RouteDebugger />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route 
            path="/admin-dashboard" 
            element={
              <AdminProtectedRoute>
                <AdminDashboard />
              </AdminProtectedRoute>
            } 
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/home2"
            element={
              <ProtectedRoute>
                <Home2 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
          <Route
            path="/services"
            element={
              <ProtectedRoute>
                <Services />
              </ProtectedRoute>
            }
          />
          <Route
            path="/blog"
            element={
              <ProtectedRoute>
                <Blog />
              </ProtectedRoute>
            }
          />
          <Route
            path="/blog/1"
            element={
              <ProtectedRoute>
                <BlogPost1 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/blog/2"
            element={
              <ProtectedRoute>
                <BlogPost2 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/blog/3"
            element={
              <ProtectedRoute>
                <BlogPost3 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <Contact />
              </ProtectedRoute>
            }
          />
          <Route
            path="/services/website-development"
            element={
              <ProtectedRoute>
                <WebsiteDevelopment />
              </ProtectedRoute>
            }
          />
          <Route
            path="/services/ecommerce-solutions"
            element={
              <ProtectedRoute>
                <EcommerceSolutions />
              </ProtectedRoute>
            }
          />
          <Route
            path="/services/branding-design"
            element={
              <ProtectedRoute>
                <BrandingDesign />
              </ProtectedRoute>
            }
          />
          <Route
            path="/services/content-copywriting"
            element={
              <ProtectedRoute>
                <ContentCopywriting />
              </ProtectedRoute>
            }
          />
          <Route
            path="/services/digital-marketing"
            element={
              <ProtectedRoute>
                <DigitalMarketing />
              </ProtectedRoute>
            }
          />
          <Route
            path="/services/ongoing-support"
            element={
              <ProtectedRoute>
                <OngoingSupport />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
