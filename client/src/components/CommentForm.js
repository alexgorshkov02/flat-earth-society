import React, {useState} from 'react'
import { useMutation } from '@apollo/client'
import { ADD_COMMENT } from '../utils/mutations'
import { QUERY_ME, QUERY_POSTS } from '../utils/queries'

const CommentForm =() => {
    const [addComment, {error}] = useMutation(ADD_COMMENT,{
        update(cache, {data: {addComment}}){
            try{
                const {comments} = cache.readQuery({query: QUERY_POSTS})

                cache.writeQuery({
                    query: QUERY_POSTS,
                    data: {comments: [addComment, ...comments]}
                })
            }catch(e){
                console.error(e)
            }
            const {me} = cache.readQuery({query: QUERY_ME})
            cache.writeQuery({
                query: QUERY_ME,
                data: {me: {...me, comments: [...me.comments, addComment]}}
            })
        }
    })
    const [commentText, setText] = useState('');
    const [characterCount, setCaracterCount] = useState(0)
    const handleChange = event => {
        if(event.target.value.length <= 280){
            setText(event.target.value);
            setCaracterCount(event.target.value.length)
        }
    };
    const handleFormSubmit = async event => {
        event.preventDefault()
        try{
            await addComment({
                variables:{commentText}
            })
            setText('')
            setCaracterCount(0);
        }catch(e){
            console.error(e)
        }
    }
    return (
        <div>
           <p className={`m-0  ${characterCount === 280 ? 'text-error': ''}`}>
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong</span>}
      </p>
          <form className="flex-row justify-center justify-space-between-md align-stretch"
          onSubmit={handleFormSubmit}>
          <textarea
                placeholder="Comment..."
                value={commentText}
                className="form-input col-12 col-md-9"
                onChange={handleChange}
                ></textarea>
            <button className="btn col-12 col-md-3" type="submit">
              Submit
            </button>
          </form>
        </div>
      )
}

export default CommentForm;