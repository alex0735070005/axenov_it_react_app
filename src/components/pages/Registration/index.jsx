import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import EmailIcon from '@material-ui/icons/Email';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import InputAdornment from '@material-ui/core/InputAdornment';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import InputPassword from 'components/modules/InputPassword';
import { showSustemMessage, useAppStore } from 'components/App';

import { fetchRegistration } from './helpers';

import './styles.scss';

const Registration = props => {
  const { dispatch } = useAppStore();

  const send = e => {
    e.preventDefault();
    fetchRegistration(e.target)
      .then(response => {
        if (response && response.status === 200) {
          props.history.push('/login');
        }
      })
      .catch(() =>
        showSustemMessage({
          dispatch,
          variant: 'warning',
          message: 'Login or email alredy exists',
        })
      );
  };

  return (
    <div className="registration">
      <Container maxWidth="sm">
        <h1 className="page__title">
          <AssignmentIndIcon className="page__icon" />
          Registration
        </h1>
        <form
          onSubmit={send}
          className="registration__form"
          noValidate
          autoComplete="off"
        >
          <TextField
            name="username"
            className="registration__text"
            label="Login"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountBoxIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            name="email"
            className="registration__text"
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
            className="registration__text"
            classIconName="registration__visability"
          />

          <Button
            type="submit"
            className="registration__btn"
            variant="contained"
            color="primary"
            size="large"
            endIcon={<SendIcon />}
          >
            Registration
          </Button>
        </form>
      </Container>
    </div>
  );
};

Registration.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Registration;
