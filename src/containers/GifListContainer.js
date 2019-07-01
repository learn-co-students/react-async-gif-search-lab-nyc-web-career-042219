import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

    state = {
        gifs: []
    }

    fetchGifs = (query = "cat") => {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        //&limit=3 at the end of URL
        .then(res => res.json())
        .then(data => {
            this.setState({
                gifs: data.data.map(gif => gif.images.original.url)
                //map through to set to the right key
            })
        })
    }

    componentDidMount() {
        this.fetchGifs()
    }

    render() {
        console.log(this.state)
        return(
            <div>
                < GifSearch fetchGifs={this.fetchGifs}/>
                < GifList gifs={this.state.gifs} />
            </div>
        )
    }
}

export default GifListContainer