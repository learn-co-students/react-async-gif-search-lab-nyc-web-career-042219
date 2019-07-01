import React from 'react'

class GifSearch extends React.Component {

    state = {
        query: ''
    }

    handleOnChange = (e) => {
        this.setState({
            query: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.fetchGifs(this.state.query)
    }

    render() {
        console.log(this.state)
        return(
            <form onSubmit={this.handleSubmit} >
                <input type="text" class="form-control" id="searchGifs" placeholder="Search Gifs"
                value={this.state.query}
                onChange={this.handleOnChange} />
                <button type="submit" class="btn btn-primary">Search</button>
            </form>
        )
    }

}

export default GifSearch