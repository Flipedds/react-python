import React, { useState } from 'react'
import ApiService from './ApiService'
function Form(props) {
    const[title,setTitle] = useState(props.article.title)
    const[body,setBody] = useState(props.article.body)

    const updateArticle = () => {
        ApiService.UpdateArticle(props.article.id, {title,body})
        .then(resp => console.log(resp))
        .catch(error => console.log(error))
    }
  return (
    <div>
        {props.article ? (
        <div className='mb-3'>
            <label htmlFor='title' className='form-label'>Title</label>
            <input type='text' className='form-control'
            value = {title}
            onChange = {(e) => setTitle(e.target.value)}
            placeholder='Porfavor entrar com o titulo'/>        
            <label htmlFor='body' className='form-label'>Title</label>
            <textarea
            row='5'
            value = {body}
            onChange = {(e) => setBody(e.target.value)}
            className='form-control'
            placeholder='Porfavor entrar com descrição'
            />
            <button
            onClick={updateArticle}
            className='btn btn-primary mt-3'
            >Update</button>        
        </div>



        ):null}
    </div>
  )
}

export default Form

