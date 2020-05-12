import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    {/* :variavel+ -> pega todos os caracteres (no caso não irá achar o "/" é uma outra rota) */}
    <Route path="/repositories/:repository+" component={Repository} />
  </Switch>
);

export default Routes;
