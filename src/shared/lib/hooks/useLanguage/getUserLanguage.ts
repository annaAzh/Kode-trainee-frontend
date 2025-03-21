export const getUserLanguage = () => {
  return navigator.language.split('-')[0] || 'ru';
};
