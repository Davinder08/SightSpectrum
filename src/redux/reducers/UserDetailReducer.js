import * as constants from '../../utils/Constants';

const initialState = {
  isUpdating: false,
  name: '',
  error: false,
};

export default saveUserDetails = (state = initialState, action) => {
  switch (action.type) {
    case constants.UPDATING_NAME:
      return {
        ...state,
        isUpdating: true,
      };

    case constants.NAME_UPDATED:
      return {
        isUpdating: false,
        name: action.payload,
        error: false,
      };

    case constants.ERROR_WHILE_NAME_UPDATING:
      return {
        ...state,
        isUpdating: false,
        error: true,
      };

    default:
      return state;
  }
};
