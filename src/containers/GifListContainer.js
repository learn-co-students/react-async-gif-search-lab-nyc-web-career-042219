import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {

  state = {
    gifs: []
  }

  fetchGifs = (searchQuery) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(res => res.json())
    .then(data =>
      this.setState({
        gifs: data.data.slice(0, 3)
      })
    )
  }

  componentDidMount() {
    this.fetchGifs('cats')
  }

  render(){
    console.log(this.state.gifs)
    return (
      <div>
        <GifSearch fetchGifs={this.fetchGifs}/>
        {this.state.gifs.map(gif => {
          return <GifList key={gif.id} gif={gif}/>
        })}

      </div>
      )
  }

}
