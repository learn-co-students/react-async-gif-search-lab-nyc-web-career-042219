import React from 'react'

import NavBar from './NavBar'
import GifListContainer from './GifList'

// the App component should render out the GifListContainer component 

export default class App extends React.Component { 

  state = {
    gifArr: []
  }

  

  componentDidMount(){
    fetch("http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g")
    .then(r => r.json())
    .then(data => 
   
      this.setState({
        gifArr: data.data.slice(0,3)
      })
      )
  }
  render(){ 

    console.log(this.state.gifArr)
    return(
    <div>
        < NavBar color='black' title="Giphy Search" />
        <GifListContainer gifsArr={this.state.gifArr}/>
    </div>
  )
}
}


