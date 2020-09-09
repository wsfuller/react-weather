/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import isEmpty from 'lodash/isEmpty';

import {
  classNamesFunction,
  styled,
  ComboBox,
  Link,
  MessageBar,
  PrimaryButton,
  SearchBox,
  SelectableOptionMenuItemType,
} from '@fluentui/react';
import { Icon } from '@fluentui/react/lib/Icon';

import states from '../../utils/states';
import SearchBarStyles from './SearchBar.styles';
import getWeather from '../../redux/actions/weather';

const stateSelectHeader = {
  key: 'select-a-state',
  text: 'State Select',
  itemType: SelectableOptionMenuItemType.Header,
  disabled: true,
};
const stateOptions = [stateSelectHeader, ...states];

const getClassNames = classNamesFunction();

const INITIAL_CITY = '';
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

  /*useEffect(() => {
    dispatch(getWeather('seattle', 'washington'));
  }, [dispatch]);*/

  useEffect(() => {
    const hasCity = city;
    const hasState = stateSelectKey === INITIAL_STATE ? false : true;
    if (hasCity && hasState) {
      setDisabled(false);
    }
  }, [city, stateSelectKey]);

  useEffect(() => {
    const { forecast, error, loading } = weather;
    if (!isEmpty(forecast) && !error && !loading) {
      setCity(INITIAL_CITY);
      setStateSelectKey(INITIAL_STATE);
    }
  }, [weather]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisabled(true);
    dispatch(getWeather(city, stateSelectKey));
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
          value={city}
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
