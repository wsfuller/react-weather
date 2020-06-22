import React from 'react';

import { Image, Stack } from '@fluentui/react';

import ModalHeader from '../ModalHeader';

const react = require('../../../assets/images/tools/react.svg');
const redux = require('../../../assets/images/tools/redux.svg');
const fluentUI = require('../../../assets/images/tools/fluent-ui.svg');
const openWeather = require('../../../assets/images/tools/open-weather-map-orange.svg');

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
    image: fluentUI,
    title: 'Fluent UI (Web)',
  },
  {
    image: openWeather,
    title: 'Open Weather',
  },
];

function BuiltWith() {
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
                height={100}
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
