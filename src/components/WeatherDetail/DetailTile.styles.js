const DetailTileStyles = (theme) => {
  return {
    root: {
      width: '100%',
      padding: `${theme.spacing.m} ${theme.spacing.s1}`,
      borderBottom: `1px solid ${theme.palette.neutralLight}`,
    },
    icon: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      width: 24,
      height: 24,
      marginBottom: theme.spacing.s2,
      fontSize: 24,
      textAlign: 'center',
    },
  };
};

export default DetailTileStyles;
