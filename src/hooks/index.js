import { useState, useEffect, useMemo } from 'react';

// Custom hook for managing project data
export const useProjects = (initialProjects = []) => {
  const [projects, setProjects] = useState(initialProjects);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Memoized filtered and sorted projects
  const processedProjects = useMemo(() => {
    return projects
      .filter(project => project && project.title)
      .sort((a, b) => {
        // Sort by featured first, then by creation date
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return new Date(b.createdDate) - new Date(a.createdDate);
      });
  }, [projects]);

  // Get unique technologies
  const allTechnologies = useMemo(() => {
    const techs = new Set();
    projects.forEach(project => {
      if (project.technologies) {
        project.technologies.forEach(tech => techs.add(tech));
      }
    });
    return Array.from(techs).sort();
  }, [projects]);

  // Get featured projects
  const featuredProjects = useMemo(() => {
    return processedProjects.filter(project => project.featured);
  }, [processedProjects]);

  // Filter projects by search term and technology
  const filterProjects = (searchTerm = '', selectedTech = 'all') => {
    return processedProjects.filter(project => {
      const matchesSearch = !searchTerm || 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesTech = selectedTech === 'all' || 
        (project.technologies && project.technologies.includes(selectedTech));
      
      return matchesSearch && matchesTech;
    });
  };

  return {
    projects: processedProjects,
    featuredProjects,
    allTechnologies,
    loading,
    error,
    filterProjects
  };
};

// Hook for managing UI state
export const useUIState = () => {
  const [theme, setTheme] = useState('light');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return {
    theme,
    sidebarOpen,
    activeSection,
    toggleTheme,
    toggleSidebar,
    setActiveSection
  };
};

// Hook for scroll-based animations
export const useScrollAnimation = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections
    const sections = document.querySelectorAll('[id]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return { visibleSections };
};
