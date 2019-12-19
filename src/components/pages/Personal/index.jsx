import React from 'react';
import PropTypes from 'prop-types';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import useQuery from '../../shared/hooks/useQuery';

import './styles.scss';

const Personal = (props) => {
  const user = useQuery('/personal', () => props.history.push('/login'));

  if (!user.data) return null;
  const { apiKey, email, username } = user.data;

  return (
    <div className="personal">
      <h1 className="page__title">
        <EmojiObjectsIcon className="page__icon" />
        Personal
      </h1>
      <Paper className="personal__list">
        <Grid className="personal__row" container alignItems="center" spacing={3}>
          <Grid className="personal__cell" item xs={12} sm={3}>
            <h2>{username}</h2>
          </Grid>
          <Grid className="personal__cell" item xs={12} sm={9} />
        </Grid>
        <Grid className="personal__row" container alignItems="center" spacing={3}>
          <Grid className="personal__cell" item xs={12} sm={3}>
            Email:
          </Grid>
          <Grid className="personal__cell" item xs={12} sm={9}>{email}</Grid>
        </Grid>
        <Grid className="personal__row" container alignItems="center" spacing={3}>
          <Grid className="personal__cell" item xs={12} sm={3}>
            Api key:
          </Grid>
          <Grid className="personal__cell" item xs={12} sm={9}>
            <TextField className="apiList__input" value={apiKey} />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};


Personal.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Personal;
