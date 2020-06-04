import React from 'react';

import { Toggle, classNamesFunction, styled } from '@fluentui/react';
import { Icon } from '@fluentui/react/lib/Icon';

import { styles } from './App.styles';

const getClassNames = classNamesFunction();

function AppBar({ toggleTheme, theme }) {
  const classes = getClassNames(styles, theme);

  return (
    <header className={classes.appBar}>
      <div className="app-name">React Weather</div>
      <Toggle
        className={classes.themeToggle}
        offText={<Icon className={classes.toggleIcon} iconName="Sunny" />}
        onText={<Icon className={classes.toggleIcon} iconName="ClearNight" />}
        onChange={() => toggleTheme()}
      />
    </header>
  );
}

export default styled(AppBar, styles);
