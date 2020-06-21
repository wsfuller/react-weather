import React from 'react';

import { Link } from '@fluentui/react';

import ModalHeader from '../ModalHeader';

function AboutProject() {
  return (
    <div>
      <ModalHeader title="About Project" />
      <p className="body">
        ReactWeather is an educational tool used to display weather using the{' '}
        <Link href="https://openweathermap.org/api" target="_blank">
          OpenWeatherMap API
        </Link>
        . This applicaiton was built using the latest versions of React, Redux,
        and Microsoft's Fluent UI.
      </p>
      <p>
        ReactWeather is meant to to allow users to search and return weather
        updates that are accurate to around 2 hours. So give ReactWeather a try,
        if there are any suggestions, errors, or improvements please feel free
        to head over to the{' '}
        <Link href="https://github.com/wsfuller/react-weather" target="_blank">
          GitHub Repo
        </Link>{' '}
        and submit an issue
      </p>
    </div>
  );
}

export default AboutProject;
