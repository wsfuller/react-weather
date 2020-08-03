const WeatherPanelStyles = (theme) => {
  console.log('THEME: ', theme);
  return {
    root: {
      position: 'absolute',
      left: 0,
      display: 'flex',
      flexDirection: 'column',
      width: '30vw',
      maxWidth: 400,
      height: 'calc(100% - 48px)',
      backgroundColor: theme.palette.neutralLighterAlt,
      borderTop: `1px solid ${theme.palette.accent}`,
      overflowY: 'auto',
      transition: 'width .4s ease-in-out',
      boxShadow: theme.effects.elevation8,
      // selectors: {
      //   [`@media (min-width: ${theme.breakpoints.medium}px)`]: {
      //     width: '30vw',
      //   },
      // },
    },
    panelContent: {
      height: '100%',
      // padding: `${theme.spacing.l1} ${theme.spacing.m} ${
      //   theme.spacing.l2.substring(0, 2) * 2 + 'px'
      // }`,
      overflowY: 'auto',
    },
    panelClosed: {
      width: 75,
    },
  };
};

export default WeatherPanelStyles;
