import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

const URL = 'http://api.giphy.com/v1/gifs/search?q='
const API = '&api_key=dc6zaTOxFJmzC&rating=g'

export default class GifListContainer extends Component {

  state = {
    searchTerm: '',
    gifs: []
  }

  handleSubmit = (event) =>{
    event.preventDefault();

    fetch(URL.concat(this.state.searchTerm).concat(API))
    .then(res => res.json())
    .then(data => this.setState({ gifs: data.data}))
  }

  handleChange = (event) =>{
    this.setState({ searchTerm: event.target.value })
  }


  render(){
    return(
      <div>
      <GifList gifs={this.state.gifs} />
      <GifSearch handleSubmit={this.handleSubmit} handleChange={this.handleChange} searchTerm={this.state.searchTerm}/>
      </div>
    )
  }
}
