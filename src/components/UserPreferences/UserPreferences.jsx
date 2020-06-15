import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Callout,
  classNamesFunction,
  IconButton,
  styled,
  Text,
  Toggle,
} from '@fluentui/react';
import { Icon } from '@fluentui/react/lib/Icon';
import { useBoolean, useId } from '@uifabric/react-hooks';

import UserPreferencesStyles from './UserPreferences.styles';
import {
  getUserPreferences,
  toggleUserPreference,
} from '../../redux/actions/userPreferences';

const getClassNames = classNamesFunction();

function UserPreferences({ theme }) {
  const dispatch = useDispatch();
  const userPreferences = useSelector((state) => state.userPreferences);
  const [isCalloutVisible, { toggle: toggleIsCalloutVisible }] = useBoolean(
    true
  );
  const classes = getClassNames(UserPreferencesStyles, theme);
  const labelId = useId('callout-label');
  const descriptionId = useId('callout-description');

  useEffect(() => {
    dispatch(getUserPreferences());
  }, []);

  return (
    <Fragment>
      <div className={classes.buttonArea}>
        <IconButton
          iconProps={{ iconName: 'PlayerSettings' }}
          title="User Settings"
          ariaLabel="User Settings"
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
          target={`.${classes.buttonArea}`}
          onDismiss={toggleIsCalloutVisible}
          setInitialFocus>
          <div className={classes.header}>
            <Text className={classes.title} id={labelId}>
              User Preferences
            </Text>
          </div>
          <div className={classes.inner}>
            <Text className={classes.optionLabel}>Temperature Scale:</Text>
            <Toggle
              disabled={userPreferences.loading}
              className={classes.themeToggle}
              {...(userPreferences.temperatureScale === 'fahrenheit'
                ? 'defaultChecked'
                : null)}
              offText="F"
              onText="C"
              onChange={() =>
                dispatch(toggleUserPreference('temperatureScale'))
              }
            />
            <hr />
            <Text className={classes.optionLabel}>Time Format:</Text>
            <Toggle
              disabled={userPreferences.loading}
              className={classes.themeToggle}
              offText="AM/PM"
              onText="24H"
              onChange={() => toggleUserPreference('timeFormat')}
            />
            <hr />
            <Text className={classes.optionLabel}>Dark Mode:</Text>
            <Toggle
              disabled={userPreferences.loading}
              className={classes.themeToggle}
              defaultChecked={userPreferences.darkMode}
              offText={<Icon className={classes.toggleIcon} iconName="Sunny" />}
              onText={
                <Icon className={classes.toggleIcon} iconName="ClearNight" />
              }
              onChange={() => dispatch(toggleUserPreference('themeMode'))}
            />
          </div>
        </Callout>
      )}
    </Fragment>
  );
}

export default styled(UserPreferences, UserPreferencesStyles);
