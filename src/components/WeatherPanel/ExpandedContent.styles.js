const ExpandedContentStyles = (theme) => {
  console.log('EXPANDED CONTENT STYLES THEME: ', theme);
  return {
    detailCard: {
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
    label: {
      display: 'flex',
      alignItems: 'center',
    },
    location: {
      marginTop: 0,
      padding: `0 ${theme.spacing.s1}`,
      fontWeight: theme.FontWeights.light,
      textAlign: 'right',
    },
    locationIcon: {
      marginRight: theme.spacing.s2,
      fontSize: '60%',
    },
    currentTemperature: {
      marginTop: 0,
      fontWeight: theme.FontWeights.light,
      textAlign: 'center',
    },
  };
};

export default ExpandedContentStyles;
