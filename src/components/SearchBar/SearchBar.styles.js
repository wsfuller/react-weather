const SearchBarStyles = (theme) => {
  console.log('theme breh: ', theme);
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      width: '100%',
      backgroundColor: theme.palette.neutralLighterAlt,
    },
    form: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: `${theme.spacing.s1} ${theme.spacing.m}`,
    },
    searchInput: {
      maxWidth: '40%',
      marginRight: theme.spacing.s1,
    },
    stateCombobox: {
      maxWidth: 115,
      marginRight: theme.spacing.s1,
    },
    submitButton: {
      minWidth: 'auto',
      selectors: {
        [`@media (min-width: ${theme.breakpoints.medium}px)`]: {
          minWidth: 80,
        },
      },
    },
    divider: {
      margin: `0 ${theme.spacing.m}`,
    },
    errorMessage: {
      position: 'absolute',
      top: '100%',
    },
  };
};

export default SearchBarStyles;
