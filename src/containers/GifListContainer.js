import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
class GifListContainer extends React.Component{

	state = {
		data: []
	}

	filterResults = (query="cats") => {
		fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
			.then(res => res.json())
			.then(data => {

				this.setState({
					data: data.data.map(gif => gif.url)
			})
		})
	}


	render(){
		console.log(this.state)
	  return (
	    <div>
		    <GifSearch filterResults={this.filterResults}/>
		    <GifList results={this.state.data}/>

	    </div>
	  )
	}
}
export default GifListContainer
