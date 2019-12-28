import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import styles from './styles';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

function SnackWrapper(props) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const { className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  const Message = (
    <span id="client-snackbar" className={classes.message}>
      <Icon className={clsx(classes.icon, classes.iconVariant)} />
      {message}
    </span>
  );

  const ActionButton = onClose && (
    <IconButton
      key="close"
      aria-label="close"
      color="inherit"
      onClick={onClose}
    >
      <CloseIcon className={classes.icon} />
    </IconButton>
  );

  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={Message}
      action={ActionButton ? [<ActionButton />] : null}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...other}
    />
  );
}

SnackWrapper.defaultProps = {
  className: '',
  onClose: null,
};

SnackWrapper.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
};

export default SnackWrapper;
