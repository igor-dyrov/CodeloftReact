import * as React from 'react';
import { Route, Switch } from 'react-router';

import Main from './containers/Main/Main';
import SignIn from './containers/SignIn/SignIn';
import SignUp from './containers/SignUp/SignUp';
import NotFound from './containers/NotFound/NotFound';

export const PATHS = {
  MENU: '/',
  SIGN_IN: '/login',
  SIGN_UP: '/register',
  PROFILE: '/profile',
  ABOUT: '/about',
  HIGH_SCORE: '/score',
  SINGLE_PLAYER: '/singleplayer',
  MULTI_PLAYER: '/multiplayer',
  CHAT: '/chat',
  ERROR: '/404',
};

/* tslint:disable:jsx-no-lambda */
export const routes: JSX.Element = (
  <Switch>
    <Route exact={ true } path={ PATHS.MENU } component={ Main } />
    <Route exact={ true } path={ PATHS.SIGN_IN } component={ SignIn } />
    <Route exact={ true } path={ PATHS.SIGN_UP } component={ SignUp } />
    <Route exact={ true } path={ PATHS.ERROR } component={ NotFound } />
    <Route render={ () => <span>Тоже не найдено</span> } />
  </Switch>
);
