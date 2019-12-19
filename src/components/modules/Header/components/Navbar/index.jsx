import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { NavLink, Link } from 'react-router-dom';
import Switch from '@material-ui/core/Switch';
import './styles.scss';

const Navbar = () => {
  const [state, setState] = React.useState({ checked: true });

  const handleChange = (name) => (event) => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar className="navbar">
        <Link className="navbar__logoLink" to="/">
          <HomeIcon className="navbar__icon" />
          <i className="navbar__logo">
            Axenov it
          </i>
        </Link>
        <NavLink className="navbar__link" exact to="/">Home</NavLink>
        <NavLink className="navbar__link" to="/login">Login</NavLink>
        <NavLink className="navbar__link" to="/registration">Registration</NavLink>
        <NavLink className="navbar__link" to="/personal">Personal</NavLink>
        <div className="navbar__loginTrigger">
          <AccountCircleIcon className="navbar__circle" />
          Logout
          <Switch
            checked={state.checked}
            onChange={handleChange('checked')}
            value="checked"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />

        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
