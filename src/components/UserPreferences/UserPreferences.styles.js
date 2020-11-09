import { makeStyles } from '@fluentui/react-theme-provider';

const useUserPreferencesStyles = makeStyles((theme) => {
  return {
    userPreferenceButton: {
      verticalAlign: 'top',
      display: 'inline-block',
    },
    callout: {
      maxWidth: 300,
    },
    header: {
      padding: '18px 24px 12px',
    },
    title: [
      theme.fonts.large,
      {
        margin: 0,
      },
    ],
    calloutBody: {
      height: '100%',
      padding: '0 24px 20px',
    },
    subtext: [
      theme.fonts.small,
      {
        margin: 0,
      },
    ],
    themeToggle: {
      marginBottom: '0 !important',
    },
    toggleIcon: {
      position: 'relative',
      top: 2,
    },
  };
});

export default useUserPreferencesStyles;
