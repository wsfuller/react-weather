import React from 'react';
import PropTypes from 'prop-types';

import { classNamesFunction, styled, Stack, Text } from '@fluentui/react';

import DetailCardStyles from './DetailCard.styles';

const getClassNames = classNamesFunction();

function DetailCard({ borderRight, borderBottom, icon, label, value, theme }) {
  const classes = getClassNames(DetailCardStyles, theme);

  return (
    <Stack.Item
      className={`${classes.root} ${borderRight && classes.borderRight} ${
        borderBottom && classes.borderBottom
      }`}>
      <Text variant="large" className={classes.value}>
        {value}
      </Text>
      <Stack.Item className={classes.label}>
        <div className={classes.icon}>{icon}</div>
        <Text>{label}</Text>
      </Stack.Item>
    </Stack.Item>
  );
}

DetailCard.propTypes = {
  value: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  borderRight: PropTypes.bool,
  borderBottom: PropTypes.bool,
};

DetailCard.defaultProptypes = {
  borderRight: false,
  borderBottom: false,
};

export default styled(DetailCard, DetailCardStyles);
