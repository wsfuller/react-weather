import React from 'react';
import PropTypes from 'prop-types';

import {
  classNamesFunction,
  styled,
  ProgressIndicator,
  Text,
} from '@fluentui/react';

import DetailBarStyles from './DetailBar.styles';

const getClassNames = classNamesFunction();

function DetailBar({ theme, textLeft, textRight, label, description, fill }) {
  const classes = getClassNames(DetailBarStyles, theme);

  return (
    <div className={classes.root}>
      <Text variant="mediumPlus">
        <span dangerouslySetInnerHTML={{ __html: textLeft }} />
      </Text>
      <ProgressIndicator
        className={classes.indicator}
        label={label}
        description={description}
        percentComplete={fill}
      />
      <Text variant="mediumPlus">
        <span dangerouslySetInnerHTML={{ __html: textRight }} />
      </Text>
    </div>
  );
}

DetailBar.propTypes = {
  fill: PropTypes.number.isRequired,
  textLeft: PropTypes.string.isRequired,
  textRight: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.string,
};

DetailBar.defaultProps = {
  textRight: '',
  label: '',
  description: 'Weather Detail Bar',
};

export default styled(DetailBar, DetailBarStyles);
