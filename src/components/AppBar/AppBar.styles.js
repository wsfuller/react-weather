import { makeStyles } from '@fluentui/react-theme-provider';

const useAppBarStyles = makeStyles((theme) => {
  return {
    root: {
      width: '100%',
      padding: `${theme.spacing.s1} ${theme.spacing.m}`,
      backgroundColor: theme.palette.neutralLight,
    },
    appBranding: {
      display: 'flex',
      alignItems: 'center',
      color: `${theme.palette.neutralPrimary}`,
    },
    appLogo: {
      display: 'inline-block',
      marginRight: 5,
    },
  };
});

export default useAppBarStyles;
