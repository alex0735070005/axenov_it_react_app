import { HIDE_SUSTEM_MODAL, SHOW_SUSTEM_MODAL } from './reducer';

export const showSustemModalAction = ({ variant, message }) => ({
  type: SHOW_SUSTEM_MODAL,
  payload: {
    variant,
    message,
  },
});

export const hideSustemModalAction = () => ({ type: HIDE_SUSTEM_MODAL });
