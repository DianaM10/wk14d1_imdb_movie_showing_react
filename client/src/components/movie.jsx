var React = require('react');

var Movie = React.createClass({
  render: function() {
    return (
      <div className='movie'>
        <h4 className='movie-title'>
        {this.props.name}</h4>
        <p>Show Times</p>
      </div>
      )
  }

});

module.exports = Movie;