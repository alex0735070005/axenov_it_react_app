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
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import InputPassword from '../../modules/InputPassword';

import { fetchRegistration } from './helpers';

import './styles.scss';

const Registration = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);

  const send = (e) => {
    e.preventDefault();
    fetchRegistration(e.target).then((response) => {
      if (response && response.status === 200) {
        props.history.push('/login');
      }
    }).catch(() => {
      setOpen(true);
    });
  };

  return (
    <div className="registration">

      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">Email or login is exists</span>}
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />

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
