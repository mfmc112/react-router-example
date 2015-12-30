"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute  = ReactRouter.IndexRoute;

var routes = (
  <Route path="/" component={require('./components/app')}>
    <IndexRoute component={require('./components/home')}/>
    <Route path="/home" component={require('./components/home')}/>
    <Route path="/user" component={require('./components/user')}/>
    <Route path="/user/:userID" component={require('./components/userById')}/>
    <Route path="/about" component={require('./components/about')}/>
  </Route>
);

module.exports = routes;