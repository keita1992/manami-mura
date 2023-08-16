import * as actions from './actions';
import * as types from './types';

const initialState: types.State = {
  isMobile: false,
};

export default function uiReducer(
  state = initialState,
  action: actions.ActionTypes
): types.State {
  switch (action.type) {
    case actions.SET_IS_MOBILE:
      return {
        ...state,
        isMobile: action.payload,
      };
    default:
      return state;
  }
}
