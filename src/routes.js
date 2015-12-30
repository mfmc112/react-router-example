"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute  = ReactRouter.IndexRoute;

var routes = (
  <Route path="/" component={require('./components/App')}>
    <IndexRoute component={require('./components/Home')}/>
    <Route path="/home" component={require('./components/Home')}/>
    <Route path="/user">
      <IndexRoute component={require('./components/Users')}/>
      <Route path=":userID" component={require('./components/User')}/>
      <Route path="*" component={require('./components/NotFound')}/>
    </Route>
    <Route path="/about" component={require('./components/About')}/>
  </Route>
);

module.exports = routes;
