/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import {
  classNamesFunction,
  styled,
  ComboBox,
  // DirectionalHint,
  // IconButton,
  PrimaryButton,
  SearchBox,
  SelectableOptionMenuItemType,
  // TooltipHost,
} from '@fluentui/react';

import states from '../../utils/states';
import SearchBarStyles from './SearchBar.styles';
import searchWeather from '../../redux/actions/weather';

const stateSelectHeader = {
  key: 'select-a-state',
  text: 'Select State',
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

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
          placeholder="Enter City Name"
          onChange={handleCityChange}
        />
        <ComboBox
          name="state-select"
          className={classes.stateCombobox}
          options={stateOptions}
          selectedKey={stateSelectKey}
          onChange={handleStateChange}
        />
        <PrimaryButton text="Search" type="submit" disabled={disabled} />
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
    </div>
  );
}

export default styled(SearchBar, SearchBarStyles);
