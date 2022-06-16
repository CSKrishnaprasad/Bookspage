import React from 'react'

//jsx

const Book = ({img,title,author}) =>{    //props ={img,title,author}

 
// const {img,title,author,} =  props    //destructuring in js

  
  return <article className='book'>
   <img src={img} />
      <h1>{title}</h1>
      <h4>{author}</h4>
    
     
    </article>
 
}
export default Book