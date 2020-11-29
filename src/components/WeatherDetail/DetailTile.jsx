import React from 'react';
import PropTypes from 'prop-types';

import {
  classNamesFunction,
  styled,
  DirectionalHint,
  Stack,
  Text,
  TooltipHost,
} from '@fluentui/react';
import { useId } from '@uifabric/react-hooks';

import DetailTileStyles from './DetailTile.styles';

const getClassNames = classNamesFunction();

function DetailTile({ icon, tooltip, value, theme }) {
  const classes = getClassNames(DetailTileStyles, theme);
  const tooltipId = useId('tooltip');
  return (
    <TooltipHost
      content={tooltip}
      id={tooltipId}
      directionalHint={DirectionalHint.rightCenter}>
      <Stack className={classes.root} horizontalAlign="center">
        <Stack.Item className={classes.icon}>{icon}</Stack.Item>
        <Stack.Item align="center" className={classes.value}>
          <Text variant="small" nowrap>
            {value}
          </Text>
        </Stack.Item>
      </Stack>
    </TooltipHost>
  );
}

DetailTile.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]).isRequired,
  icon: PropTypes.node,
  tooltip: PropTypes.string.isRequired,
};

export default styled(DetailTile, DetailTileStyles);
