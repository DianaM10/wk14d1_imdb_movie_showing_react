var React = require('react');
var ReactDOM = require('react-dom');
var MovieTable = require('./components/MovieTable.jsx')

window.onload = function(){
  ReactDOM.render(
    <MovieTable />,
    document.getElementById('app')
  );
}
