const INITIAL_STATE = {
  isModalVisible: false,
  whichModal: '',
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'OPEN_MODAL': {
      return {
        ...state,
        isModalVisible: true,
        whichModal: action.payload,
      };
    }
    case 'CLOSE_MODAL': {
      return {
        ...state,
        isModalVisible: false,
      };
    }
    default: {
      return { ...state };
    }
  }
}

export default reducer;
