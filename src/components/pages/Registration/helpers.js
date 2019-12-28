import axios from 'axios';
import { showSustemMessage } from 'components/App';

// eslint-disable-next-line import/prefer-default-export
export const fetchRegistration = (target, dispatch, history) =>
  axios
    .post('/registration', {
      username: target.username.value,
      email: target.email.value,
      password: target.password.value,
    })
    .then(response => {
      if (response && response.status === 200) {
        history.push('/login');
      }
    })
    .catch(() =>
      showSustemMessage({
        dispatch,
        variant: 'warning',
        message: 'Login or email alredy exists',
      })
    );
