const WeatherPanelStyles = (theme) => {
  return {
    root: {
      position: 'relative',
      left: 0,
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
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
