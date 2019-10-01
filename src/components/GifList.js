import React from 'react'

export default class GifList extends React.Component {
	
	

	displayGifs = () => {
			let results = this.props.results.slice(0, 4)
			let imgs = results.map(url => {
				return <img src={url} alt={url} key={url}/>
			})
			return imgs 
		}

	render(){
		console.log(this.props.results.slice(0, 4))
		return (
			<div>
				{this.displayGifs()}
			</div>
		)
	}
}