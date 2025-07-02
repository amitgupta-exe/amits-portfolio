import React, { createContext, useContext, useReducer } from 'react';

// Action types
const ACTION_TYPES = {
  SET_THEME: 'SET_THEME',
  SET_ACTIVE_SECTION: 'SET_ACTIVE_SECTION',
  TOGGLE_MOBILE_NAV: 'TOGGLE_MOBILE_NAV',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR'
};

// Initial state
const initialState = {
  theme: 'light',
  activeSection: '',
  mobileNavOpen: false,
  loading: false,
  error: null
};

// Reducer
const portfolioReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_THEME:
      return { ...state, theme: action.payload };
    
    case ACTION_TYPES.SET_ACTIVE_SECTION:
      return { ...state, activeSection: action.payload };
    
    case ACTION_TYPES.TOGGLE_MOBILE_NAV:
      return { ...state, mobileNavOpen: !state.mobileNavOpen };
    
    case ACTION_TYPES.SET_LOADING:
      return { ...state, loading: action.payload };
    
    case ACTION_TYPES.SET_ERROR:
      return { ...state, error: action.payload };
    
    default:
      return state;
  }
};

// Context
const PortfolioContext = createContext();

// Provider component
export const PortfolioProvider = ({ children }) => {
  const [state, dispatch] = useReducer(portfolioReducer, initialState);

  // Actions
  const setTheme = (theme) => {
    dispatch({ type: ACTION_TYPES.SET_THEME, payload: theme });
    localStorage.setItem('portfolio-theme', theme);
  };

  const setActiveSection = (section) => {
    dispatch({ type: ACTION_TYPES.SET_ACTIVE_SECTION, payload: section });
  };

  const toggleMobileNav = () => {
    dispatch({ type: ACTION_TYPES.TOGGLE_MOBILE_NAV });
  };

  const setLoading = (loading) => {
    dispatch({ type: ACTION_TYPES.SET_LOADING, payload: loading });
  };

  const setError = (error) => {
    dispatch({ type: ACTION_TYPES.SET_ERROR, payload: error });
  };

  const value = {
    ...state,
    setTheme,
    setActiveSection,
    toggleMobileNav,
    setLoading,
    setError
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};

// Custom hook to use the context
export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};

export { ACTION_TYPES };
