const ExpandedContentStyles = (theme) => {
  return {
    location: {
      marginTop: 0,
      padding: `0 ${theme.spacing.s1}`,
      fontWeight: theme.FontWeights.light,
      textAlign: 'right',
    },
    locationIcon: {
      marginRight: theme.spacing.s1,
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
