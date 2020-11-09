import { makeStyles } from '@fluentui/react-theme-provider';

const useWeatherPanelStyles = makeStyles((theme) => {
  return {
    root: {
      position: 'relative',
      left: 0,
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      maxWidth: 250,
      height: '100%',
      backgroundColor: theme.palette.neutralLighterAlt,
      borderTop: `1px solid ${theme.palette.accent}`,
      overflowY: 'auto',
      boxShadow: theme.effects.elevation8,
      transition: 'max-width .4s ease-in-out',
      selectors: {
        '&.panel-collapsed': {
          maxWidth: 75,
          transition: 'max-width .4s ease-in-out',
        },
      },
    },
    panelContent: {
      height: '100%',
      overflowY: 'auto',
    },
  };
});

export default useWeatherPanelStyles;
