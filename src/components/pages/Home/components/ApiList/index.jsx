import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import data from './data.json';

const ApiItems = () => data.map((item) => (
  <Paper key={item.id} className="apiList__row">
    <Grid container alignItems="center" spacing={3}>
      <Grid item xs={12} sm={3}>
        <h3 className="apiList__title">{item.title}</h3>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField className="apiList__input" value={item.query} />
      </Grid>
      <Grid className="apiList__description" item xs={12}>
        {item.description}
      </Grid>
    </Grid>
  </Paper>
));

export default ApiItems;
