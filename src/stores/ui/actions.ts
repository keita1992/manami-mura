import * as types from './types';

export const SET_IS_MOBILE = 'SET_IS_MOBILE' as const;

export const setIsMobileAction = (payload: types.IsMobile) => ({
  type: SET_IS_MOBILE,
  payload,
});

export type ActionTypes = ReturnType<typeof setIsMobileAction>;
