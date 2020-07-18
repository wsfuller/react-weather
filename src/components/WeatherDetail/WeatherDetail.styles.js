const WeatherDetailStyles = (theme) => {
  console.log('theme: ', theme);
  return {
    root: {
      position: 'absolute',
      left: 0,
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '30vw',
      height: '100%',
      padding: `${theme.spacing.l1} ${theme.spacing.m}`,
      backgroundColor: theme.palette.neutralLighterAlt,
    },
  };
};

export default WeatherDetailStyles;
