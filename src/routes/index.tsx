import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

interface Props {
  toggleTheme(): void;
}

function Routes({ toggleTheme }: Props): React.ReactElement {
  return (
    <Switch>
      <Route
        path="/"
        component={() => <Dashboard toggleTheme={toggleTheme} />}
        exact
      />
      <Route path="/repository/:repository+" component={Repository} />
    </Switch>
  );
}

export default Routes;
