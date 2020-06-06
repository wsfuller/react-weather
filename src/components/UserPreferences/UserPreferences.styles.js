const UserPreferencesStyles = (theme) => {
  return {
    buttonArea: {
      verticalAlign: 'top',
      display: 'inline-block',
      textAlign: 'center',
      minWidth: 130,
      height: 32,
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
        fontWeight: theme.FontWeights.semilight,
      },
    ],
    inner: {
      height: '100%',
      padding: '0 24px 20px',
    },
    actions: {
      position: 'relative',
      marginTop: 20,
      width: '100%',
      whiteSpace: 'nowrap',
    },
    subtext: [
      theme.fonts.small,
      {
        margin: 0,
        fontWeight: theme.FontWeights.semilight,
      },
    ],
    optionLabel: [
      theme.fonts.small,
      {
        display: 'inline-block',
        marginBottom: 10,
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
};

export default UserPreferencesStyles;
