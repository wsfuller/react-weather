const DetailBarStyles = (theme) => {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: theme.spacing.m,
    },
    indicator: {
      position: 'relative',
      top: 10,
      width: '100%',
      margin: '0 10px',
    },
  };
};

export default DetailBarStyles;
