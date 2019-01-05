import * as React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { App } from './app';
import { About, MembersPage } from './components';

// StatelessComponent 没有自身状态的，由prop来驱动的
export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <HashRouter>
      <div className="container-fluid">
        <Route component={App} />
        <Switch>
          <Route exact path='/' component={About} />
          <Route path='/about' component={About} />
          <Route exact path='/members' component={MembersPage} />
        </Switch>
      </div>
    </HashRouter>
  )
}