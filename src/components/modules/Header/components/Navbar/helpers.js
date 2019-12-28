import axios from 'axios';
import { clearUserAction } from 'components/App';

export const fetchLogout = (dispatch, history) =>
  axios
    .get('/logout')
    .then(() => {
      dispatch(clearUserAction());
      history.push('/login');
    })
    .catch(() => history.push('/login'));

export const testFunction = () => 'test function';
