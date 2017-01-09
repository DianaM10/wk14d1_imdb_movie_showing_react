var React = require('react');
var Movie = require('./Movie.jsx');

var MovieList = React.createClass({
  render: function() {
    var movieComponents = this.props.movies.map(function (movieObject){
      return (
        <Movie
        name={movieObject.name} href={movieObject.url}>
        </Movie>
        )
    });

    return(
      <div className="movie-list">
        {movieComponents}
        </div>
      )
  }


});

module.exports = MovieList;