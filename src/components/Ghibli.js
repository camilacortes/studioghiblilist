import React, { Component } from 'react';
import axios from 'axios';

class Ghibli extends Component {
  state = {
    errorLoading: null,
    films: [],
    isLoading: true
  };

  componentDidMount() {
    axios
      .get('https://ghibliapi.herokuapp.com/films')
      .then(res => this.setState({ films: res.data, isLoading: false }))
      .catch(err => this.setState({ errorLoading: err, isLoading: false }));
  }

  render() {
    if (this.state.isLoading) {
      return 'Currently loading...';
    } else if (this.state.errorLoading) {
      return 'There has been an error. 404 😔';
    } else {
      return (
        <div className='list'>
          {this.state.films.map(films => (
            <h2 key={films.id}>{films.title}</h2>
          ))}
        </div>
      );
    }
  }
}

export default Ghibli;
