import React from 'react'
import NavBar from './NavBar'

export default class GifSearch extends React.Component{
    
    state={
        searchInput: ""
    }

    handleChange = (e) => {
        this.setState({
            searchInput: e.target.value
        })
    }

    render(){
        return (
            <form>
                 <input type="text" value={this.state.searchInput} onChange={this.handleChange}/>
            </form>
        )
    }

}
