import { hideSustemModalAction, showSustemModalAction } from './actionsTypes';
import { SUSTEM_MESSAGE_SHOW_TIME } from '../constants';

// eslint-disable-next-line import/prefer-default-export
export const showSustemMessage = ({ dispatch, message, variant }) => {
  dispatch(showSustemModalAction({ variant, message }));
  setTimeout(() => dispatch(hideSustemModalAction()), SUSTEM_MESSAGE_SHOW_TIME);
};
