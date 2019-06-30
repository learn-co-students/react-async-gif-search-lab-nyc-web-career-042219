import React from 'react';

export default (props) => {
  return (
    <ul>
      {props.gifs.map((gif, i) => {
        return (
          <li key={i}>
            <img src={gif} alt={`gif-${i}!`}/>
          </li>
        )
      })}
    </ul>
  )
}
