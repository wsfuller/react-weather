const AppBarStyles = (theme) => {
  return {
    root: {
      width: '100%',
      padding: `${theme.spacing.s1} ${theme.spacing.m}`,
      backgroundColor: theme.palette.neutralLight,
    },
    appBranding: {
      display: 'flex',
      alignItems: 'center',
    },
    logo: {
      display: 'inline-block',
      marginRight: 5,
    },
  };
};

export default AppBarStyles;
