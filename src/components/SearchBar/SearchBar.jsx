import React from 'react';

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

import SearchBarStyles from './SearchBar.styles';
import states from '../../utils/states';

const stateSelectHeader = {
  key: 'select-a-state',
  text: 'Select State',
  itemType: SelectableOptionMenuItemType.Header,
  disabled: true,
};
const stateOptions = [stateSelectHeader, ...states];

const getClassNames = classNamesFunction();

function SearchBar({ theme }) {
  const classes = getClassNames(SearchBarStyles, theme);
  console.log('search bar classes: ', classes);
  return (
    <div className={classes.root}>
      <SearchBox
        className={classes.searchInput}
        placeholder="Enter City Name"
      />
      <ComboBox
        className={classes.stateCombobox}
        autoComplete={'on'}
        options={stateOptions}
        selectedKey={'select-a-state'}
      />
      <PrimaryButton text="Search" onClick={() => console.log('search')} />
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
