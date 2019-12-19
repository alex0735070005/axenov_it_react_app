import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import EmailIcon from '@material-ui/icons/Email';
import InputAdornment from '@material-ui/core/InputAdornment';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import InputPassword from '../../modules/InputPassword';
import { fetchLogin } from './helpers';

import './styles.scss';

const Login = (props) => {
  const send = (e) => {
    e.preventDefault();
    fetchLogin(e.target).then((response) => {
      if (response && response.status === 200) {
        props.history.push('/personal');
      }
    });
  };

  return (
    <div className="login">
      <Container maxWidth="sm">
        <h1 className="page__title">
          <LockOpenIcon className="page__icon" />
          Login
        </h1>
        <form
          onSubmit={send}
          className="login__form"
          noValidate
          autoComplete="off"
        >
          <TextField
            className="login__text"
            name="email"
            label="Email"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />

          <InputPassword
            name="password"
            className="login__text"
            classIconName="login__visability"
          />

          <Button
            type="submit"
            className="login__btn"
            variant="contained"
            color="primary"
            size="large"
            endIcon={<SendIcon />}
          >
            Login
          </Button>
        </form>
      </Container>
    </div>
  );
};

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
