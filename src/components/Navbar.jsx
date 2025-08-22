import { useNavigate } from 'react-router-dom'
import { ThemeToggle } from './theme-toggle'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './dropdown-menu'
import { logoutUser } from '../utils/auth'
import { ChevronDown } from 'lucide-react'


export default function Navbar({ user }) {
  const handleLogout = () => {
    // Clear user session from localStorage
   logoutUser()
    // Redirect to login page
    window.location.href = '/login'
  }
 
  const navigate = useNavigate()
  const initials = user ? `${user.firstName?.[0] || ''}${user.lastName?.[0] || ''}`.toUpperCase() : 'U'
   

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 text-black dark:text-white border-b border-black/10 dark:border-white/10 transition-colors">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3">
          <img src="/Logo.jpg" alt="Logo" className="h-8 w-auto" />
          <span className="sr-only">Home</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="inline-flex items-center gap-1 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                  Home
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-52">
                <DropdownMenuItem onClick={() => navigate('/home')}>
                  Home 1
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/home2')}>
                  Home 2
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          
          <li>
            <button onClick={() => navigate('/about')} className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
              About Us
            </button>
          </li>

          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="inline-flex items-center gap-1 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                  Services
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {/* All Services Section */}
                <DropdownMenuItem 
                  onClick={() => navigate('/services')}
                  className="font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
                >
                  All Services
                </DropdownMenuItem>
                
                {/* Separator */}
                <div className="h-px bg-gray-200 dark:bg-gray-700 mx-2 my-1" />
                
                {[
                  {label:'Website Development', path:'/services/website-development'},
                  {label:'E-Commerce Solutions', path:'/services/ecommerce-solutions'},
                  {label:'Branding & Design', path:'/services/branding-design'},
                  {label:'Content & Copywriting', path:'/services/content-copywriting'},
                  {label:'Digital Marketing', path:'/services/digital-marketing'},
                  {label:'Ongoing Support', path:'/services/ongoing-support'}
                ].map((item) => (
                  <DropdownMenuItem 
                    key={item.label} 
                    onClick={() => navigate(item.path)}
                  >
                    {item.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </li>

          <li>
            <button onClick={() => navigate('/blog')} className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
              Blog
            </button>
          </li>
          <li>
            <button onClick={() => navigate('/contact')} className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
              Contact Us
            </button>
          </li>
        </ul>
        <button onClick={handleLogout}>Log Out</button>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button className="md:hidden inline-flex items-center justify-center rounded-md border border-black/10 dark:border-white/10 px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5" aria-label="Menu">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

          <div className="h-9 w-9 rounded-full bg-indigo-500 dark:bg-indigo-600 text-white grid place-items-center font-semibold select-none">
            {initials}
          </div>
        </div>
      </nav>
    </header>
  )
} 