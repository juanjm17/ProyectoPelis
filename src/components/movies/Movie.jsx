import React from 'react'

const Movie = ({ data }) => {

  return (
    
    <div>
     <h1>{data.title}</h1>
     <img src={"https://image.tmdb.org/t/p/w600_and_h900_bestv2"+data.poster_path} alt="" />

    </div>
  )
}

export default Movie