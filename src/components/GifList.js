import React from 'react'
import App from './App'

export default class GifListContainer extends React.Component {


    render(){
        console.log(this.props.gifsArr)
        return (
            <ul>
                {this.props.gifsArr.length>0 ? this.props.gifsArr.map(gif => {
                    return <li> <img src={gif.images.original.url}/></li>
                }): null}
            </ul>
        )
    }
}