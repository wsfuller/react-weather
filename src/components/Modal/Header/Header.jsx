import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { classNamesFunction, IconButton, styled } from '@fluentui/react';

import toggleModal from '../../../redux/actions/modal';

import ModalHeaderStyles from './Header.styles';

const cancelIcon = { iconName: 'Cancel' };
const getClassNames = classNamesFunction();

function ModalHeader({ title, theme }) {
  const dispatch = useDispatch();
  const classes = getClassNames(ModalHeaderStyles, theme);

  return (
    <header className={classes.root}>
      <h3>{title}</h3>
      <IconButton
        iconProps={cancelIcon}
        ariaLabel="Close popup modal"
        onClick={() => dispatch(toggleModal(null, 'close'))}
      />
    </header>
  );
}

ModalHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default styled(ModalHeader, ModalHeaderStyles);
