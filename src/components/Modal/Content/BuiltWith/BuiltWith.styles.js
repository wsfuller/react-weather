const BuiltWithStyles = (theme) => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: theme.semanticColors.bodyBackground,
      selectors: {
        [`@media (min-width: ${theme.breakpoints.medium}px)`]: {
          flexDirection: 'row',
          flexWrap: 'wrap',
        },
      },
    },
    tool: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      flex: '1 0 50%',
      padding: `${theme.spacing.s1} ${theme.spacing.m}`,
      selectors: {
        [`@media (min-width: ${theme.breakpoints.large}px)`]: {
          flexBasis: 'auto',
        },
      },
    },
  };
};

export default BuiltWithStyles;
