import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import './styles.scss';

const InputPassword = props => {
  const [isShow, changeIsShow] = useState(false);

  const { classIconName, className, name } = props;

  const showPassword = () => {
    changeIsShow(!isShow);
  };

  const PasswordIcon = isShow ? VisibilityOff : VisibilityIcon;
  const type = isShow ? 'text' : 'password';

  return (
    <TextField
      name={name}
      type={type}
      className={classnames(className, 'inputPassword')}
      label="Password"
      variant="outlined"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <PasswordIcon
              className={classnames(classIconName, 'inputPassword__icon')}
              onClick={showPassword}
            />
          </InputAdornment>
        ),
      }}
    />
  );
};

InputPassword.propTypes = {
  classIconName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
};

InputPassword.defaultProps = {
  classIconName: '',
  className: '',
  name: '',
};

export default InputPassword;
