import React from 'react';

const GifList = (props) => {
  console.log(props)
  return (
    <ul>
      <li>
        <img src={props.gif.images.original.url} alt=""/>
      </li>
    </ul>
    )
}

export default GifList
