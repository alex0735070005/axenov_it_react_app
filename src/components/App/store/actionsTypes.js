import {
  HIDE_SUSTEM_MODAL,
  SHOW_SUSTEM_MODAL,
  SET_USER,
  CLEAR_USER,
} from './reducer';

export const showSustemModalAction = ({ variant, message }) => ({
  type: SHOW_SUSTEM_MODAL,
  payload: {
    variant,
    message,
  },
});

export const clearUserAction = () => ({ type: CLEAR_USER });

export const setUserAction = user => ({
  type: SET_USER,
  payload: { user },
});

export const hideSustemModalAction = () => ({ type: HIDE_SUSTEM_MODAL });
