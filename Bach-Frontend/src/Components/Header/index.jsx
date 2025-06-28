import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Music, User, Search, Trophy, MessageSquare, BarChart3, LogOut, Menu, X } from 'lucide-react';
import { useAuthStore } from '../../stores/authStore';

const Header = () => {
  const { user, logout } = useAuthStore();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: Music },
    { path: '/discover', label: 'Discover', icon: Search },
    { path: '/challenges', label: 'Challenges', icon: Trophy },
    { path: '/messages', label: 'Messages', icon: MessageSquare },
    { path: '/progress', label: 'Progress', icon: BarChart3 },
    { path: '/profile', label: 'Profile', icon: User },
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
    setIsMobileMenuOpen(false);
  };

  const handleMobileNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]); return (
    <header
      ref={menuRef}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200/50 mobile-header mobile-text-optimize"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">        <div className="flex items-center justify-between h-14 mobile:h-12">
        {/* Logo */}
        <div className="flex items-center space-x-2 mobile:space-x-1.5">
          <div className="w-9 h-9 mobile:w-8 mobile:h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
            <Music className="w-5 h-5 mobile:w-4 mobile:h-4 text-white" />
          </div>
          <div className="mobile:hidden sm:block">
            <h1 className="text-xl mobile:text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Bach Edu
            </h1>
          </div>
          <div className="hidden mobile:block">
            <h1 className="text-sm font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Bach Edu
            </h1>
          </div>
        </div>          {/* Navigation */}
        <nav className="hidden xl:flex items-center space-x-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
                  ? 'bg-purple-100 text-purple-700 shadow-sm'
                  : 'text-slate-600 hover:text-purple-600 hover:bg-slate-50'
                  }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* User Menu */}
        <div className="flex items-center space-x-2 mobile:space-x-1.5">            {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-2 mobile:p-1.5 text-slate-500 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors duration-200 mobile-touch-target"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 mobile:w-4 mobile:h-4" />
            ) : (
              <Menu className="w-5 h-5 mobile:w-4 mobile:h-4" />
            )}            </button>

          {/* Avatar and logout button - only visible on desktop */}
          <div className="hidden xl:flex items-center space-x-2">
            <img
              src={user?.avatar}
              alt={user?.name}
              className="w-9 h-9 rounded-full border-2 border-white shadow-sm"
            />
            <button
              onClick={handleLogout}
              className="p-2 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="xl:hidden border-t border-slate-200/50 bg-white/98 backdrop-blur-sm mobile-menu-panel">
            <div className="px-3 py-4 space-y-2">
              {/* User info on mobile */}
              <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
                <img
                  src={user?.avatar}
                  alt={user?.name}
                  className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                />
                <div>
                  <div className="text-sm font-medium text-slate-900">{user?.name}</div>
                  <div className="text-xs text-slate-500">{user?.location}</div>
                </div>
              </div>

              {/* Navigation items */}
              <div className="space-y-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  return (
                    <button
                      key={item.path}
                      onClick={() => handleMobileNavigation(item.path)}
                      className={`w-full flex items-center space-x-3 px-3 py-3 rounded-xl text-left transition-all duration-200 mobile-touch-target ${isActive
                        ? 'bg-purple-100 text-purple-700 shadow-sm'
                        : 'text-slate-600 hover:text-purple-600 hover:bg-slate-50'
                        }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Logout button */}
              <div className="pt-3 border-t border-slate-100">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center space-x-3 px-3 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors duration-200 mobile-touch-target"
                >
                  <LogOut className="w-5 h-5" />
                  <span className="font-medium">Cerrar Sesión</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
