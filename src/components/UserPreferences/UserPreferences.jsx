/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Callout, IconButton, Text, Toggle } from '@fluentui/react';
import { Icon } from '@fluentui/react/lib/Icon';
import { useBoolean, useId } from '@uifabric/react-hooks';

import useUserPreferencesStyles from './UserPreferences.styles';
import {
  getUserPreferences,
  toggleUserPreference,
} from '../../redux/actions/userPreferences';

function UserPreferences() {
  const dispatch = useDispatch();
  const userPreferences = useSelector((state) => state.userPreferences);
  const [isCalloutVisible, { toggle: toggleIsCalloutVisible }] = useBoolean(
    false
  );
  const classes = useUserPreferencesStyles();
  const labelId = useId('callout-label');
  const descriptionId = useId('callout-description');

  useEffect(() => {
    dispatch(getUserPreferences());
  }, []);

  return (
    <Fragment>
      <div className={classes.userPreferenceButton}>
        <IconButton
          iconProps={{ iconName: 'PlayerSettings' }}
          title="User Preferences"
          ariaLabel="User Preferences"
          onClick={toggleIsCalloutVisible}
        />
      </div>
      {isCalloutVisible && (
        <Callout
          className={classes.callout}
          ariaLabelledBy={labelId}
          ariaDescribedBy={descriptionId}
          role="alertdialog"
          gapSpace={0}
          target={`.${classes.userPreferenceButton}`}
          onDismiss={toggleIsCalloutVisible}
          setInitialFocus>
          <div className={classes.header}>
            <Text className={classes.title} id={labelId}>
              User Preferences
            </Text>
          </div>
          <div className={classes.calloutBody}>
            <Toggle
              label="System of Measurement"
              disabled={userPreferences.loading}
              defaultChecked={userPreferences.systemOfMeasurement === 'metric'}
              {...(userPreferences.systemOfMeasurement === 'imperial'
                ? 'defaultChecked'
                : null)}
              offText="Imperial (°F)"
              onText="Metric (°C)"
              onChange={() =>
                dispatch(
                  toggleUserPreference(
                    'systemOfMeasurement',
                    userPreferences.systemOfMeasurement
                  )
                )
              }
            />
            <hr />
            <Toggle
              label="Time Format"
              // disabled={userPreferences.loading}
              disabled
              className={classes.themeToggle}
              defaultChecked={userPreferences.timeFormat === '24h'}
              offText="AM/PM"
              onText="24H"
              onChange={() =>
                dispatch(
                  toggleUserPreference('timeFormat', userPreferences.timeFormat)
                )
              }
            />
            <hr />
            <Toggle
              label="Dark Mode"
              disabled={userPreferences.loading}
              className={classes.themeToggle}
              defaultChecked={userPreferences.darkMode}
              offText={<Icon className={classes.toggleIcon} iconName="Sunny" />}
              onText={
                <Icon className={classes.toggleIcon} iconName="ClearNight" />
              }
              onChange={() =>
                dispatch(
                  toggleUserPreference('themeMode', userPreferences.darkMode)
                )
              }
            />
          </div>
        </Callout>
      )}
    </Fragment>
  );
}

export default UserPreferences;
