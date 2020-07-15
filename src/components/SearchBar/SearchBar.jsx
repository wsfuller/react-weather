/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import {
  classNamesFunction,
  styled,
  ComboBox,
  // DirectionalHint,
  // IconButton,
  Link,
  MessageBar,
  PrimaryButton,
  SearchBox,
  SelectableOptionMenuItemType,
  // TooltipHost,
} from '@fluentui/react';
import { Icon } from '@fluentui/react/lib/Icon';

import states from '../../utils/states';
import SearchBarStyles from './SearchBar.styles';
import searchWeather from '../../redux/actions/weather';

const stateSelectHeader = {
  key: 'select-a-state',
  text: 'State Select',
  itemType: SelectableOptionMenuItemType.Header,
  disabled: true,
};
const stateOptions = [stateSelectHeader, ...states];

const getClassNames = classNamesFunction();

const INITIAL_CITY = null;
const INITIAL_STATE = 'select-a-state';

function SearchBar({ theme }) {
  const dispatch = useDispatch();
  const classes = getClassNames(SearchBarStyles, theme);

  const { weather } = useSelector(
    (state) => ({ weather: state.weather }),
    shallowEqual
  );

  const [city, setCity] = useState(INITIAL_CITY);
  const [stateSelectKey, setStateSelectKey] = useState(INITIAL_STATE);
  const [disabled, setDisabled] = useState(true);

  console.log('WEATHER: ', weather);

  // useEffect(() => {
  //   dispatch(searchWeather());
  // }, []);

  useEffect(() => {
    const hasCity = city;
    const hasState = stateSelectKey === INITIAL_STATE ? false : true;
    if (hasCity && hasState) {
      setDisabled(false);
    }
  }, [city, stateSelectKey]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisabled(true);
    dispatch(searchWeather(city, stateSelectKey));
  };

  const handleCityChange = (e) => {
    const value = e?.target?.value;
    if (!value) {
      return setCity(INITIAL_CITY);
    }

    setCity(value);
  };

  const handleStateChange = useCallback(
    (event, option) => {
      setStateSelectKey(option.key);
    },
    [setStateSelectKey]
  );

  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <SearchBox
          name="city"
          className={classes.searchInput}
          placeholder="City Name"
          onChange={handleCityChange}
        />
        <ComboBox
          name="state-select"
          className={classes.stateCombobox}
          options={stateOptions}
          selectedKey={stateSelectKey}
          onChange={handleStateChange}
        />
        <PrimaryButton
          className={classes.submitButton}
          text={<Icon className={classes.toggleIcon} iconName="Search" />}
          type="submit"
          disabled={disabled}
        />
      </form>
      {/* <span className={classes.divider}>OR</span>
      <TooltipHost
        content="Use Current Location"
        directionalHint={DirectionalHint.bottomCenter}>
        <IconButton
          iconProps={{ iconName: 'MapPin' }}
          title="Current Location"
          ariaLabel="Current Location"
        />
      </TooltipHost> */}
      {weather.error && (
        <MessageBar
          className={classes.errorMessage}
          messageBarType={1}
          isMultiline={false}
          dismissButtonAriaLabel="Close">
          {`${weather.error.message}, please try again later`}
          <Link href="/help">Need help?</Link>
        </MessageBar>
      )}
    </div>
  );
}

export default styled(SearchBar, SearchBarStyles);
