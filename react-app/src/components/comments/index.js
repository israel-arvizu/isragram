import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSingleComment } from "../../store/comments";
import './comments.css'

export default function AddComment({post}) {
    const dispatch = useDispatch()
    const [comment, setComment] = useState('')
    const userId = useSelector(state => state.session.user.id)
    let postId = post.id

    const processComment = async (e) => {
        e.preventDefault()
        await dispatch(addSingleComment(comment, userId, postId))
    }

    return (
        <div className='post-bottom-comment-sect'>
            <i class="fa-regular fa-face-smile fa-xl" style={{marginRight: '5px', marginLeft: '7px'}}></i>
            <form onSubmit={(e) => processComment(e)}>
                <input
                type='text'
                className='post-bottom-comment-box'
                value={comment}
                onChange={e => setComment(e.target.value)}
                placeholder='Add a comment...'/>
                <button type='submit' className='post-comment-btn'>Post</button>
            </form>
        </div>
    )
}