import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@/stores';

import * as types from './types';

const selectIsMobile = (state: RootState) => state.ui.isMobile;

export const getIsMobile = createSelector(
  [selectIsMobile],
  (isMobile: types.IsMobile) => isMobile
);
