import React from 'react';

import { getTheme, FontIcon } from '@fluentui/react';

const MapMarker = () => {
  const theme = getTheme();

  return (
    <FontIcon
      style={{
        color: theme.palette.greenLight,
        fontSize: `${theme.fonts.xxLargePlus.fontSize}`,
      }}
      iconName="POISolid"
    />
  );
};

export default MapMarker;
