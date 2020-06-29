export const styles = (theme) => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'start',
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
  };
};
