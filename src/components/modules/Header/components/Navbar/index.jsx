import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { NavLink, Link, withRouter } from 'react-router-dom';
import Switch from '@material-ui/core/Switch';
import { useAppStore, clearUserAction } from 'components/App';
import { fetchLogout } from './helpers';
import './styles.scss';

const Navbar = ({ history }) => {
  const {
    store: { user },
    dispatch,
  } = useAppStore();

  const IS_USER = !!user;

  const username = IS_USER ? user.username : null;

  const logoutHandler = () => {
    if (!IS_USER) return null;
    fetchLogout(dispatch, history);
    return dispatch(clearUserAction());
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar className="navbar">
        <Link className="navbar__logoLink" to="/">
          <HomeIcon className="navbar__icon" />
          <i className="navbar__logo">Axenov it</i>
        </Link>
        <NavLink className="navbar__link" exact to="/">
          Home
        </NavLink>
        <NavLink className="navbar__link" to="/login">
          Login
        </NavLink>
        <NavLink className="navbar__link" to="/registration">
          Registration
        </NavLink>
        <NavLink className="navbar__link" to="/personal">
          Personal
        </NavLink>
        <div className="navbar__loginTrigger">
          {username && <b>{username}</b>}
          <AccountCircleIcon className="navbar__circle" />
          Logout
          <Switch
            checked={IS_USER}
            onChange={logoutHandler}
            value="checked"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(Navbar);
