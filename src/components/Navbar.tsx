import { NavLink } from 'react-router-dom';
import { Leaf, Heart, Book, Brain, FlaskConical, Sprout } from 'lucide-react';
import { useState } from 'react';
import { UserProfile } from './UserProfile';
import { ChatbotToggle } from './ChatbotToggle';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Site Title */}
          <NavLink to="/" className="flex items-center text-2xl font-bold text-green-700">
            <Sprout className="h-8 w-8 mr-2 text-green-500" />
            <span className="hidden sm:block">Ayush Plant Explorer</span>
          </NavLink>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-500 hover:text-green-500 focus:outline-none focus:text-green-500"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414L12 13.414l-4.864 4.864a1 1 0 0 1-1.414-1.414L10.586 12 5.722 7.136a1 1 0 0 1 1.414-1.414L12 10.586l4.864-4.864a1 1 0 0 1 1.414 1.414L13.414 12l4.864 4.864z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink
              to="/guide"
              className={({ isActive }) => `flex items-center px-4 py-2 rounded-lg transition-colors duration-200 ${isActive ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <Book className="h-5 w-5 mr-2" />
              Guide
            </NavLink>
            <NavLink
              to="/quiz"
              className={({ isActive }) => `flex items-center px-4 py-2 rounded-lg transition-colors duration-200 ${isActive ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <Brain className="h-5 w-5 mr-2" />
              Quiz
            </NavLink>
            <NavLink
              to="/traditions"
              className={({ isActive }) => `flex items-center px-4 py-2 rounded-lg transition-colors duration-200 ${isActive ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <Leaf className="h-5 w-5 mr-2" />
              Traditions
            </NavLink>
            <NavLink
              to="/preparations"
              className={({ isActive }) => `flex items-center px-4 py-2 rounded-lg transition-colors duration-200 ${isActive ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <FlaskConical className="h-5 w-5 mr-2" />
              Preparations
            </NavLink>
            <NavLink
              to="/favorites"
              className={({ isActive }) => `flex items-center px-4 py-2 rounded-lg transition-colors duration-200 ${isActive ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <Heart className="h-5 w-5 mr-2" />
              Favorites
            </NavLink>
            
            {/* User Profile */}
            <UserProfile />
            <ChatbotToggle />
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-2 py-2">
            <NavLink
              to="/guide"
              onClick={toggleMenu}
              className={({ isActive }) => `flex items-center px-4 py-2 rounded-lg transition-colors duration-200 ${isActive ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <Book className="h-5 w-5 mr-2" />
              Guide
            </NavLink>
            <NavLink
              to="/quiz"
              onClick={toggleMenu}
              className={({ isActive }) => `flex items-center px-4 py-2 rounded-lg transition-colors duration-200 ${isActive ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <Brain className="h-5 w-5 mr-2" />
              Quiz
            </NavLink>
            <NavLink
              to="/traditions"
              onClick={toggleMenu}
              className={({ isActive }) => `flex items-center px-4 py-2 rounded-lg transition-colors duration-200 ${isActive ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <Leaf className="h-5 w-5 mr-2" />
              Traditions
            </NavLink>
            <NavLink
              to="/preparations"
              onClick={toggleMenu}
              className={({ isActive }) => `flex items-center px-4 py-2 rounded-lg transition-colors duration-200 ${isActive ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <FlaskConical className="h-5 w-5 mr-2" />
              Preparations
            </NavLink>
            <NavLink
              to="/favorites"
              onClick={toggleMenu}
              className={({ isActive }) => `flex items-center px-4 py-2 rounded-lg transition-colors duration-200 ${isActive ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <Heart className="h-5 w-5 mr-2" />
              Favorites
            </NavLink>
            <UserProfile />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;