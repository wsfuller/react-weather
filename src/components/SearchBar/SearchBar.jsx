/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import isEmpty from 'lodash/isEmpty';

import {
  ComboBox,
  PrimaryButton,
  SearchBox,
  SelectableOptionMenuItemType,
} from '@fluentui/react';
import { Icon } from '@fluentui/react/lib/Icon';

import states from '../../utils/states';
import useSearchBarStyles from './SearchBar.styles';
import getWeather from '../../redux/actions/weather';

const stateSelectHeader = {
  key: 'select-a-state',
  text: 'State Select',
  itemType: SelectableOptionMenuItemType.Header,
  disabled: true,
};
const stateOptions = [stateSelectHeader, ...states];
const INITIAL_CITY = '';
const INITIAL_STATE = 'select-a-state';

function SearchBar() {
  const dispatch = useDispatch();
  const classes = useSearchBarStyles();

  const { weather } = useSelector(
    (state) => ({ weather: state.weather }),
    shallowEqual
  );

  const [city, setCity] = useState(INITIAL_CITY);
  const [stateSelectKey, setStateSelectKey] = useState(INITIAL_STATE);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    dispatch(getWeather('seattle', 'washington'));
  }, [dispatch]);

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
    <header className={classes.root}>
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
    </header>
  );
}

export default SearchBar;
