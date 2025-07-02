// Type definitions for consistent data structure
export const ProjectTypes = {
  WEB_DEV: 'webdev',
  ML_AI: 'ml-ai',
  GAME_DEV: 'gamedev',
  EDA: 'eda'
};

export const LinkTypes = {
  INTERNAL: 'internal',
  EXTERNAL: 'external'
};

// Validation functions
export const validateProjectData = (project) => {
  const required = ['title', 'description', 'type'];
  return required.every(field => project[field]);
};
