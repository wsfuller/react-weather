const DetailCardStyles = (theme) => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: theme.spacing.m,
      border: `1px solid ${theme.palette.neutralLight}`,
    },
    text: {
      marginBottom: theme.spacing.s1,
    },
  };
};

export default DetailCardStyles;
