import React from 'react';
import PropTypes from 'prop-types';

import { classNamesFunction, styled, Text } from '@fluentui/react';

import DetailCardStyles from './DetailCard.styles';

const getClassNames = classNamesFunction();

function DetailCard({ theme, text, label }) {
  const classes = getClassNames(DetailCardStyles, theme);

  return (
    <div className={classes.root}>
      <Text variant="mediumPlus" className={classes.text}>
        {text}
      </Text>
      <Text variant="small">{label}</Text>
    </div>
  );
}

DetailCard.propTypes = {
  text: PropTypes.string.isRequired,
  label: PropTypes.node.isRequired,
};

export default styled(DetailCard, DetailCardStyles);
