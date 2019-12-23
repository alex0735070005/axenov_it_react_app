import React from 'react';
import PropTypes from 'prop-types'; // import Fade from '@material-ui/core/Fade';
import classnames from 'classnames';
import SnackWrapper from './SnackWrapper';
import styles from './styles.module.scss';

const Snack = props => {
  const {
    isOpen,
    message,
    variant,
    horizontal,
    vertical,
    handleClose,
    animation,
  } = props;

  if (!isOpen) return null;

  const className = classnames(
    styles.snack,
    styles[horizontal],
    styles[vertical],
    styles[animation]
  );

  return (
    <div className={className}>
      <SnackWrapper onClose={handleClose} variant={variant} message={message} />
    </div>
  );
};

Snack.defaultProps = {
  isOpen: false,
  message: '',
  variant: 'info',
  horizontal: 'left',
  vertical: 'bottom',
  handleClose: null,
  animation: 'slideLeft',
};

Snack.propTypes = {
  isOpen: PropTypes.bool,
  message: PropTypes.string,
  variant: PropTypes.string,
  horizontal: PropTypes.string,
  vertical: PropTypes.string,
  handleClose: PropTypes.func,
  animation: PropTypes.string,
};

export default Snack;
