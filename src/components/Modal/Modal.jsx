import React from 'react';
import { useSelector } from 'react-redux';

import { classNamesFunction, Modal, styled } from '@fluentui/react';

import { AboutProject, BuiltWith } from './ModalContent';
import ModalStyles from './Modal.styles';

const getClassNames = classNamesFunction();

function AppModal({ theme }) {
  const { isModalVisible, whichModal } = useSelector((state) => state.modal);
  const classes = getClassNames(ModalStyles, theme);

  const modalMap = {
    aboutProject: <AboutProject />,
    builtWith: <BuiltWith />,
  };

  return (
    <Modal isOpen={isModalVisible} containerClassName={classes.root}>
      {modalMap[whichModal]}
    </Modal>
  );
}

export default styled(AppModal, ModalStyles);
