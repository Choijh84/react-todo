var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load foundation
$(document).foundation();

// APP CSS
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <p>Boilerplate Final!</p>,
  document.getElementById('app')
);
