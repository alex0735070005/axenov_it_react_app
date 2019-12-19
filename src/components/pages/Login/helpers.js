import axios from 'axios';

export const fetchLogin = (target) => axios.post('/login', {
  security: {
    credentials: {
      email: target.email.value,
      password: target.password.value,
    },
  },
});

export const testFunction = () => 'test function';
