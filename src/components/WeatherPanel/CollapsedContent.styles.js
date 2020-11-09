import { makeStyles } from '@fluentui/react-theme-provider';

const useCollapsedContentStyles = makeStyles((theme) => {
  return {
    fluentIcon: {
      fontSize: '65%',
    },
    location: {
      marginTop: 0,
      textAlign: 'right',
    },
    currentTemperature: {
      marginTop: 0,
      textAlign: 'center',
    },
  };
});

export default useCollapsedContentStyles;
