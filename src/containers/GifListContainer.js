import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
  state = {
    gifs: []
  }

  fetchGifs = (searchQuery) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(resp => resp.json())
    .then(gifData => {
      console.log("loggem:", gifData.data.slice(0,3))
      let firstThree = gifData.data.slice(0, 3).map(gif => {
          return gif.images.fixed_width.url
      })
      this.setState({gifs: firstThree})
    })
  }

  componentDidMount() {
    this.fetchGifs("funny")
  }

  render() {
    return <div>
      < GifSearch fetchGifs={this.fetchGifs} />
      < GifList gifs={this.state.gifs} />
    </div>
  }
}

export default GifListContainer
