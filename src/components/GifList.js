import React from 'react'



const GifList = (props) =>{
  console.log(props)

  function displayGifs(props){
    let results = props.gifs.slice(0, 10)
			let imgs = results.map(gif => {
				return <img src={gif.images.original.url} alt='' key={gif}/>
			})
			return imgs
  }


    return <ul>
            <li>{displayGifs(props)}</li>
          </ul>
}

GifList.defaultProps = {
  gifs: []
}

export default GifList
