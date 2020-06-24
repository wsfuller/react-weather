import React from 'react';
import { useSelector } from 'react-redux';

import { Image, Stack } from '@fluentui/react';

import ModalHeader from '../ModalHeader';

const react = require('../../../assets/images/tools/react.svg');
const redux = require('../../../assets/images/tools/redux.svg');
const fluentUILight = require('../../../assets/images/tools/fluent-ui-light.svg');
const fluentUIDark = require('../../../assets/images/tools/fluent-ui-dark.svg');
const openWeather = require('../../../assets/images/tools/open-weather-map-orange.svg');

function BuiltWith() {
  const { userPreferences } = useSelector((state) => state);
  const buildTools = [
    {
      image: react,
      title: 'React',
    },
    {
      image: redux,
      title: 'Redux',
    },
    {
      image: userPreferences.darkMode ? fluentUIDark : fluentUILight,
      title: 'Fluent UI (Web)',
    },
    {
      image: openWeather,
      title: 'Open Weather',
    },
  ];

  return (
    <div>
      <ModalHeader title="Built With" />
      <Stack
        horizontal
        horizontalAlign="center"
        wrap
        tokens={{ childrenGap: 75 }}>
        {buildTools.map(({ image, title }) => (
          <Stack horizontalAlign="center" key={title}>
            <Stack.Item>
              <Image
                src={image}
                atl={`${title} Logo`}
                width={100}
                height={80}
              />
            </Stack.Item>
            <Stack.Item>
              <h3>{title}</h3>
            </Stack.Item>
          </Stack>
        ))}
      </Stack>
    </div>
  );
}

export default BuiltWith;
