const customMediaQuery = (maxWidth) => {
  return `@media (max-width: ${maxWidth}px)`;
};

export const media = {
  custom: customMediaQuery,
  mobile: `@media(max-width: 480px)`,
  tablet: `@media(min-width: 481px) and (max-width: 768px)`,
  laptop: `@media(min-width: 769px) and (max-width: 1024px)`,
  desktop: `@media(min-width: 1025px)`,
};
