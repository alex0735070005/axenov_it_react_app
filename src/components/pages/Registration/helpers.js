import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const fetchRegistration = (target) => axios.post('/registration', {
  username: target.username.value,
  email: target.email.value,
  password: target.password.value,
});
