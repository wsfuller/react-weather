const DetailCardStyles = (theme) => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      flexBasis: 0,
      flexShrink: '1',
      flexGrow: '1',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: 100,
    },
    borderRight: {
      borderRight: `1px solid ${theme.palette.neutralLight}`,
    },
    borderBottom: {
      borderBottom: `1px solid ${theme.palette.neutralLight}`,
    },
    value: {
      marginBottom: theme.spacing.s1,
    },
    icon: {
      display: 'flex',
      alignItems: 'center',
      width: 24,
      height: 24,
      marginRight: theme.spacing.s2,
      fontSize: 18,
      textAlign: 'center',
    },
    label: {
      display: 'flex',
      alignItems: 'center',
    },
  };
};

export default DetailCardStyles;
