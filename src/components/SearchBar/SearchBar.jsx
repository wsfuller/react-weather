import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  classNamesFunction,
  styled,
  ComboBox,
  DirectionalHint,
  IconButton,
  PrimaryButton,
  SearchBox,
  SelectableOptionMenuItemType,
  TooltipHost,
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

function SearchBar({ theme }) {
  const dispatch = useDispatch();
  const classes = getClassNames(SearchBarStyles, theme);
  const [stateSelectKey, setStateSelectKey] = useState('select-a-state');

  useEffect(() => {
    dispatch(searchWeather());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handle submit: ', e);
  };

  const handleStateChange = useCallback(
    (event, option) => {
      setStateSelectKey(option.key);
    },
    [setStateSelectKey]
  );

  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={() => handleSubmit()}>
        <SearchBox
          className={classes.searchInput}
          placeholder="Enter City Name"
        />
        <ComboBox
          className={classes.stateCombobox}
          options={stateOptions}
          selectedKey={stateSelectKey}
          onChange={handleStateChange}
        />
        <PrimaryButton text="Search" type="submit" />
      </form>
      <span className={classes.divider}>OR</span>
      <TooltipHost
        content="Use Current Location"
        directionalHint={DirectionalHint.bottomCenter}>
        <IconButton
          iconProps={{ iconName: 'MapPin' }}
          title="Emoji"
          ariaLabel="Emoji"
        />
      </TooltipHost>
    </div>
  );
}

export default styled(SearchBar, SearchBarStyles);
