import React, { Component } from 'react';
import GifSearch from './../components/GifSearch';
import GifList from './../components/GifList';


class GifListContainer extends Component {
  state = {
    gif: [],
  }

  queryApi(searchTerm) {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(r => r.json()).then(data => data.map(obj => obj.images.original.url)
    .then(urls => this.setState({
      gif:  urls.slice(0, 2),
    }))
    )
  }



  render() {
    return (
      <div>
        <GifSearch queryApi={this.queryApi} />
        <GifList {...this.state}/>
      </div>
    )
  }
}

export default GifListContainer