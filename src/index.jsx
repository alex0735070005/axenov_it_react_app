import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from 'config/routes';
import loadBranchData from 'config/loadBranchData';

loadBranchData(routes, window.location.pathname).then(components => {
  hydrate(
    <BrowserRouter>{renderRoutes(components)}</BrowserRouter>,
    document.getElementById('root')
  );
});
