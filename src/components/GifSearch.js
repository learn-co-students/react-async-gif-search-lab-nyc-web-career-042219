import React from 'react';

export default class GifSearch extends React.Component {

  state = {
    searchQuery: ""
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange}></input>
      </form>
      )
  }
  
  handleChange = (event) => {
    this.setState ({
      searchQuery: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.fetchGifs(this.state.searchQuery)
  }

}
