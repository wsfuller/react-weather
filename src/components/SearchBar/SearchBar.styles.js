const SearchBarStyles = (theme) => {
  console.log('theme breh: ', theme);
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      padding: `${theme.spacing.s1} ${theme.spacing.m}`,
      backgroundColor: theme.palette.neutralLighterAlt,
    },
    form: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    searchInput: {
      marginRight: theme.spacing.s1,
    },
    stateCombobox: {
      maxWidth: 115,
      marginRight: theme.spacing.s1,
    },
    divider: {
      margin: `0 ${theme.spacing.m}`,
    },
  };
};

export default SearchBarStyles;
