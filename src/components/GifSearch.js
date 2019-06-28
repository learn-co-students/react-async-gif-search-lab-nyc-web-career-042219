import React, { Component } from 'react';

class GifSearch extends Component {

  state = {
    searchTerm: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.queryApi(e.target.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="searchTerm">Search Giphy</label>
        <input name='searchTerm' type="text" value={this.state.searchTerm} onChange={this.handleChange}/>
      </form>
    )
  }
}

export default GifSearch