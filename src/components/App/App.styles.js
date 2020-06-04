export const styles = (theme) => {
  console.log('theme breh: ', theme);
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      height: '100vh',
      color: theme.semanticColors.bodyText,
      backgroundColor: theme.semanticColors.bodyBackground,
    },
    appBar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      padding: `${theme.spacing.s1} ${theme.spacing.m}`,
      backgroundColor: theme.palette.neutralLight,
    },
    themeToggle: {
      marginBottom: '0 !important',
    },
    toggleIcon: {
      position: 'relative',
      top: 2,
    },
  };
};
