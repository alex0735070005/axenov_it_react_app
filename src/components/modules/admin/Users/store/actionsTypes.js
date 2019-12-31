/* eslint-disable import/prefer-default-export */
import { SET_USERS } from './reducer';

export const setUsersAction = users => ({
  type: SET_USERS,
  payload: {
    users,
  },
});
