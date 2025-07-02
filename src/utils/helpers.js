// Utility functions for data formatting and common operations

export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const truncateText = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

export const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const getImageUrl = (imageName) => {
  return `https://raw.githubusercontent.com/amitgupta-exe/amits-portfolio/refs/heads/v1/public/assets/images/${imageName}`;
};

export const isExternalLink = (url) => {
  return url.startsWith('http://') || url.startsWith('https://');
};
