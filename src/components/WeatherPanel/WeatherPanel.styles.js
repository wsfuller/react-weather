const WeatherPanelStyles = (theme) => {
  return {
    root: {
      position: 'absolute',
      left: 0,
      display: 'flex',
      flexDirection: 'column',
      width: '30vw',
      maxWidth: 400,
      height: '100%',
      padding: `${theme.spacing.l1} ${theme.spacing.m}`,
      backgroundColor: theme.palette.neutralLighterAlt,
      borderTop: `1px solid ${theme.palette.accent}`,
    },
    location: {
      marginTop: 0,
      fontWeight: theme.FontWeights.light,
      textAlign: 'right',
    },
    locationIcon: {
      marginRight: theme.spacing.s2,
      fontSize: '70%',
    },
    currentTemperature: {
      marginTop: 0,
      fontWeight: theme.FontWeights.light,
      textAlign: 'center',
    },
  };
};

export default WeatherPanelStyles;
