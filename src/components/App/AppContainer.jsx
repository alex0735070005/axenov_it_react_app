import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import Paper from '@material-ui/core/Paper';
import Header from 'components/modules/Header';
import Footer from 'components/modules/Footer';
import SustemMessages from './components/SustemMessages';
import AppProvider from './store/config';
import 'shared/styles.scss';

function App({ route: { routes } }) {
  return (
    <AppProvider>
      <div className="App">
        <div className="container">
          <Header />
          <Paper className="page">{renderRoutes(routes)}</Paper>
          <Footer />
          <SustemMessages />
        </div>
      </div>
    </AppProvider>
  );
}

App.propTypes = {
  route: PropTypes.shape({
    routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default App;
