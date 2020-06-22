import React from 'react';

import { Link } from '@fluentui/react';

import ModalHeader from '../ModalHeader';

function AboutProject() {
  return (
    <div>
      <ModalHeader title="About Project" />
      <p className="body">
        ReactWeather is an educational tool used to display weather data from
        the{' '}
        <Link href="https://openweathermap.org/api" target="_blank">
          OpenWeatherMap API.
        </Link>{' '}
        This application is meant to allow users to search and return weather
        updates that are accurate to around 2 hours for a specific city and
        state.
      </p>
      <p>
        The goal of this project was to build a cutting edge web application
        using the newest features of React and Redux. Another goal was to build
        this project using a new UI framework. Many of the applications I have
        built use Material UI, so this appication is using Microsoft's Fluent
        UI. Another major goal was to implement is theming. With themes users
        are able to use the default "light mode" or choose "dark mode".
      </p>
      <p>
        So I hope you enjoy using ReactWeather and if there are any suggestions,
        errors, or improvements please feel free to head over to the{' '}
        <Link href="https://github.com/wsfuller/react-weather" target="_blank">
          GitHub Repo
        </Link>{' '}
        and submit an issue
      </p>
    </div>
  );
}

export default AboutProject;
