import React from 'react';
import Paper from '@material-ui/core/Paper';
import Router from 'config/Router';
import Header from 'components/modules/Header';
import Footer from 'components/modules/Footer';
import SustemMessages from './components/SustemMessages';
import AppProvider from './store/config';
import 'shared/styles.scss';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <div className="container">
          <Header />
          <Paper className="page">
            <Router />
          </Paper>
          <Footer />
          <SustemMessages />
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
