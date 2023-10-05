import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';

import Login from '../pages/Login';
import Student from '../pages/Student';
import Students from '../pages/Students';
import Photos from '../pages/Photos';
import Register from '../pages/Register';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Students} isClossed={false} />
      <MyRoute exact path="/student/:id/edit" component={Student} isClossed />
      <MyRoute exact path="/student/" component={Student} isClossed />
      <MyRoute exact path="/photos/:id" component={Photos} isClossed />
      <MyRoute exact path="/login" component={Login} isClossed={false} />
      <MyRoute exact path="/register" component={Register} isClossed={false} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
