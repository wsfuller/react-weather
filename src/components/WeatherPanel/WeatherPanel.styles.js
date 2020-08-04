const WeatherPanelStyles = (theme) => {
  console.log('THEME: ', theme);
  return {
    root: {
      position: 'absolute',
      left: 0,
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: 'calc(100% - 48px)',
      backgroundColor: theme.palette.neutralLighterAlt,
      borderTop: `1px solid ${theme.palette.accent}`,
      overflowY: 'auto',
      boxShadow: theme.effects.elevation8,
      transition: 'width .4s ease-in-out',
    },
    panelContent: {
      height: '100%',
      overflowY: 'auto',
    },
    panelExpanded: {
      width: 250,
    },
    panelCollapsed: {
      width: 75,
    },
  };
};

export default WeatherPanelStyles;
