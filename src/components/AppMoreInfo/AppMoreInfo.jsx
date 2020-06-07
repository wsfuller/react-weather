import React from 'react';

import { IconButton, Stack } from '@fluentui/react';

const menuProps = {
  items: [
    {
      key: 'visitGitHub',
      text: 'Visit GitHub',
      iconProps: { iconName: 'GitGraph' },
      href: 'https://github.com/wsfuller/react-weather',
      target: '_blank',
    },
    {
      key: 'aboutProject',
      text: 'About Project',
      iconProps: { iconName: 'Info' },
      onClick: () => console.log('does this work click?'),
    },
  ],
  directionalHintFixed: true,
};

function AppMoreInfo(props) {
  const { disabled, checked } = props;

  return (
    <Stack tokens={{ childrenGap: 8 }} horizontal>
      <IconButton
        menuProps={menuProps}
        iconProps={{ iconName: 'MoreVertical' }}
        title="More Information"
        ariaLabel="More information about react weather"
        disabled={disabled}
        checked={checked}
      />
    </Stack>
  );
}

export default AppMoreInfo;
