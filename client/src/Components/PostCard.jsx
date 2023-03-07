import React from 'react'

const PostCard = ({post}) => {
  return (
    <div>
        <h1>{post.titulo}</h1>
        <p>{post.descripcion}</p>
        <img src={post.Imagenes} alt="" />
        
    </div>
  )
}

export default PostCard