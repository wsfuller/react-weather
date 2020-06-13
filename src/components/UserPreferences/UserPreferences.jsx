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
  getUserTemperatureScale,
  getUserThemeMode,
} from '../../redux/actions/userPreferences';

const getClassNames = classNamesFunction();

function UserPreferences(props) {
  const {
    theme,
    toggleTheme,
    toggleTemperatureScale,
    toggleTimeFormat,
  } = props;
  const dispatch = useDispatch();
  const userPreferences = useSelector((state) => state.userPreferences);
  const [isCalloutVisible, { toggle: toggleIsCalloutVisible }] = useBoolean(
    false
  );
  const classes = getClassNames(UserPreferencesStyles, theme);
  const labelId = useId('callout-label');
  const descriptionId = useId('callout-description');

  useEffect(() => {
    dispatch(getUserThemeMode());
  }, []);

  return (
    <Fragment>
      <Toggle
        className={classes.themeToggle}
        defaultChecked={userPreferences.darkMode}
        offText={<Icon className={classes.toggleIcon} iconName="Sunny" />}
        onText={<Icon className={classes.toggleIcon} iconName="ClearNight" />}
        onChange={() => toggleTheme()}
      />
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
              className={classes.themeToggle}
              {...(userPreferences.temperatureScale === 'fahrenheit'
                ? 'defaultChecked'
                : null)}
              offText="F"
              onText="C"
              onChange={() => toggleTimeFormat()}
            />
            <hr />
            <Text className={classes.optionLabel}>Time Format:</Text>
            <Toggle
              className={classes.themeToggle}
              offText="AM/PM"
              onText="24H"
              onChange={() => toggleTimeFormat()}
            />
            <hr />
            <Text className={classes.optionLabel}>Dark Mode:</Text>
          </div>
        </Callout>
      )}
    </Fragment>
  );
}

export default styled(UserPreferences, UserPreferencesStyles);
