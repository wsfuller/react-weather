import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import isEmpty from 'lodash/isEmpty';

import {
  classNamesFunction,
  styled,
  IconButton,
  MessageBar,
  Spinner,
  SpinnerSize,
  Stack,
} from '@fluentui/react';

import WeatherPanelStyles from './WeatherPanel.styles';

import CollapsedContent from './CollapsedContent';
import ExpandedContent from './ExpandedContent';

import { collateWeatherDetails } from '../../utils/collateWeatherDetails';

const getClassNames = classNamesFunction();

function WeatherPanel({ theme }) {
  const classes = getClassNames(WeatherPanelStyles, theme);
  const [isPanelExpanded, setIsPanelExpanded] = useState(true);
  const { forecast, location, error, loading } = useSelector(
    (state) => state.weather
  );

  let content;

  if (!isEmpty(forecast)) {
    const weatherDetails = collateWeatherDetails(forecast, location);

    content = isPanelExpanded ? (
      <ExpandedContent weatherDetails={weatherDetails} />
    ) : (
      <CollapsedContent weatherDetails={weatherDetails} />
    );
  } else if (error) {
    content = (
      <MessageBar
        messageBarType={1}
        isMultiline={true}
        dismissButtonAriaLabel="Close">
        {isPanelExpanded ? 'Error displaying weather details' : 'Error'}
      </MessageBar>
    );
  } else if (loading) {
    content = (
      <Spinner
        size={SpinnerSize.large}
        label="Loading weather details..."
        style={{
          marginTop: theme.spacing.m,
        }}
      />
    );
  }

  return (
    <div
      className={`${classes.root} ${
        isPanelExpanded ? classes.panelExpanded : classes.panelCollapsed
      }`}>
      <div className={classes.panelContent}>{content}</div>
      <Stack>
        <Stack.Item align="end">
          <IconButton
            iconProps={{
              iconName: `${
                isPanelExpanded ? 'DoubleChevronLeft' : 'DoubleChevronRight'
              }`,
            }}
            title="Toggle Panel"
            ariaLabel="Toggle Panel"
            onClick={() => setIsPanelExpanded(!isPanelExpanded)}
          />
        </Stack.Item>
      </Stack>
    </div>
  );
}

export default styled(WeatherPanel, WeatherPanelStyles);
