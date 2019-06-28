import React from 'react'

export default class GifSearch extends React.Component {
	state = {
		searchTerm: ""
	}

	handleChange = (event) => {
		event.persist()
		event.preventDefault()
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		return this.props.filterResults(this.state.searchTerm)
	}

	render(){
	console.log(this.props)

		return(
			<form onSubmit={this.handleSubmit}>
				<input name="searchTerm" type="text" value={this.state.searchTerm} onChange={this.handleChange}/>
				<input type="submit" />
			</form>
		)
	}
}