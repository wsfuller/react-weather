import { makeStyles } from '@fluentui/react-theme-provider';

const useExpandedContentStyles = makeStyles((theme) => {
  return {
    location: {
      marginTop: 0,
      padding: `0 ${theme.spacing.s1}`,
      fontWeight: theme.fontWeights.light,
      textAlign: 'right',
    },
    locationIcon: {
      marginRight: theme.spacing.s1,
      fontSize: '60%',
    },
    currentTemperature: {
      marginTop: 0,
      fontWeight: theme.fontWeights.light,
      textAlign: 'center',
    },
  };
});

export default useExpandedContentStyles;
