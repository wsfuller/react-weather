import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { IconButton, Stack } from '@fluentui/react';

import toggleModal from '../../redux/actions/modal';

function AppMoreInfo({ disabled, checked }) {
  const dispatch = useDispatch();
  const history = useHistory();

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
        onClick: () => dispatch(toggleModal('aboutProject', 'open')),
      },
      {
        key: 'builtWidth',
        text: 'Built With',
        iconProps: { iconName: 'Toolbox' },
        onClick: () => dispatch(toggleModal('builtWith', 'open')),
      },
      {
        key: 'help',
        text: 'Help',
        iconProps: { iconName: 'Help' },
        onClick: () => history.push('/help'),
      },
    ],
    directionalHintFixed: true,
  };

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
