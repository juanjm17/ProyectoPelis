import React from 'react'

const Movie = ({ data }) => {

  return (
    
    <div>
     <h3>{data.title}</h3>
     <img src={"https://image.tmdb.org/t/p/w300/"+data.poster_path} alt="" />

    </div>
  )
}

export default Movie