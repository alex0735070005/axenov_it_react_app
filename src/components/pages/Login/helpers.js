import axios from 'axios';
import { setUserAction, showSustemMessage } from 'components/App';

export const fetchLogin = (target, dispatch, history) =>
  axios
    .post('/login', {
      security: {
        credentials: {
          email: target.email.value,
          password: target.password.value,
        },
      },
    })
    .then(response => {
      if (response && response.status === 200) {
        dispatch(setUserAction(response.data));
        history.push('/personal');
      }
    })
    .catch(() =>
      showSustemMessage({
        dispatch,
        variant: 'warning',
        message: 'Not valid password or email',
      })
    );

export const testFunction = () => 'test function';
