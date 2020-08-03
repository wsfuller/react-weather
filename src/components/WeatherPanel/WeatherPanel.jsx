import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import isEmpty from 'lodash/isEmpty';

import {
  classNamesFunction,
  styled,
  IconButton,
  Spinner,
  SpinnerSize,
  Stack,
  Text,
} from '@fluentui/react';

import WeatherPanelStyles from './WeatherPanel.styles';

import CollapsedContent from './CollapsedContent';
import ExpandedContent from './ExpandedContent';

import { collateWeatherDetails } from '../../utils/collateWeatherDetails';

const getClassNames = classNamesFunction();

function WeatherPanel({ theme }) {
  const classes = getClassNames(WeatherPanelStyles, theme);
  const [showPanel, setShowPanel] = useState(true);
  const { state, weather, error } = useSelector((state) => state.weather);

  let content;

  if (!isEmpty(weather)) {
    const weatherDetails = collateWeatherDetails(weather, state);

    content = showPanel ? (
      <ExpandedContent weatherDetails={weatherDetails} />
    ) : (
      <CollapsedContent weatherDetails={weatherDetails} />
    );
  } else if (error) {
    content = <Text>Error Fetching Weather Details</Text>;
  } else {
    content = <Spinner size={SpinnerSize.large} />;
  }

  return (
    <div className={`${classes.root} ${!showPanel && classes.panelClosed}`}>
      <div className={classes.panelContent}>{content}</div>
      <Stack>
        <Stack.Item align="end">
          <IconButton
            iconProps={{
              iconName: `${
                showPanel ? 'DoubleChevronLeft' : 'DoubleChevronRight'
              }`,
            }}
            title="Toggle Panel"
            ariaLabel="Toggle Panel"
            onClick={() => setShowPanel(!showPanel)}
          />
        </Stack.Item>
      </Stack>
    </div>
  );
}

export default styled(WeatherPanel, WeatherPanelStyles);
