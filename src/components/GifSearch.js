import React from 'react'

const GifSearch = (props) =>{

  return   <div>
              <form onSubmit={props.handleSubmit}>
                  <label>
                  Search for Gifs:
                  <input type="text" value={props.searchTerm} onChange={props.handleChange} />
                  </label>
                  <input type="submit" value="Submit" />
            </form>
          </div>
}

export default GifSearch
