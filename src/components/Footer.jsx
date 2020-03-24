import React from 'react';

import FontIcon from 'material-ui/FontIcon';
import {
  BottomNavigation,
  BottomNavigationItem
} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

export default function Footer(props) {
  return (
    <BottomNavigation className="text-center">
      <p>
        Copyright 2017{' '}
        <a href="https://wsfuller.dev" target="_blank">
          William S Fuller
        </a>
      </p>
    </BottomNavigation>
  );
}
