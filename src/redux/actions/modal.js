function toggleModal(modalToToggle, action) {
  if (action === 'open') {
    return function (dispatch) {
      return dispatch({ type: 'OPEN_MODAL', payload: modalToToggle });
    };
  } else {
    return function (dispatch) {
      return dispatch({ type: 'CLOSE_MODAL', payload: modalToToggle });
    };
  }
}

export default toggleModal;
