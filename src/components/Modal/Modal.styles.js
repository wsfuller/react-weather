const ModalStyles = (theme) => {
  return {
    root: {
      padding: `${theme.spacing.s1} ${theme.spacing.m}`,
      selectors: {
        [`@media (min-width: ${theme.breakpoints.medium}px)`]: {
          width: 'max(1000px)',
        },
      },
    },
  };
};

export default ModalStyles;
