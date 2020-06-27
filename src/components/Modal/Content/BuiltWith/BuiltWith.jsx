import React from 'react';
import { useSelector } from 'react-redux';

import { classNamesFunction, Image, styled } from '@fluentui/react';

import BuiltWithStyles from './BuiltWith.styles';
import ModalHeader from '../../Header';
import buildTools from './buildTools';

const getClassNames = classNamesFunction();

function BuiltWith({ theme }) {
  const { userPreferences } = useSelector((state) => state);
  const tools = buildTools(userPreferences);
  const classes = getClassNames(BuiltWithStyles, theme);

  return (
    <div>
      <ModalHeader title="Built With" />
      <div className={classes.root}>
        {tools.map(({ image, title }) => (
          <div key={title} className={classes.tool}>
            <Image src={image} atl={`${title} Logo`} width={80} height={80} />
            <h5>{title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default styled(BuiltWith, BuiltWithStyles);
