import axios from 'axios';
import { setUsersAction } from './store/actionsTypes';

export const fetchUsers = dispatch =>
  axios.get('/admin/users').then(({ data }) => {
    dispatch(setUsersAction(data.users));
  });

export const testFunction = () => 'test function';
