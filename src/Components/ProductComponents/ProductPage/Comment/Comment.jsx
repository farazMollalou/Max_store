import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Comment.scss';
import PersonIcon from '@mui/icons-material/Person';

function Comment({userList}) {

    const [comments, setComments] = useState(null)

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://jsonplaceholder.ir/posts'
        }).then((result) => {
            setComments(result.data)
            console.log(result.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <>
            <div className="comment-box">
                {comments ? <>
                <div className="comment-item">
                    <div className="comment-header">
                        <PersonIcon className='icon'/>
                        {userList && <span className='userName'>{userList[2].name}</span>}
                        <span className="dot"></span>
                        <span className="score">4.5</span>
                    </div>
                    <div className="comment-body">
                        {comments[42].body}
                    </div>
                </div>
                <div className="comment-item">
                    <div className="comment-header">
                        <PersonIcon className='icon'/>
                        {userList && <span className='userName'>{userList[4].name}</span>}
                        <span className="dot"></span>
                        <span className="score" style={{backgroundColor: '#FAC213'}}>3.9</span>
                    </div>
                    <div className="comment-body">
                        {comments[19].body}
                    </div>
                </div>
                <div className="comment-item">
                    <div className="comment-header">
                        <PersonIcon className='icon'/>
                        {userList && <span className='userName'>{userList[5].name}</span>}
                    <span className="dot"></span>
                    <span className="score">4.2</span>
                    </div>
                    <div className="comment-body">
                        {comments[39].body}
                    </div>
                </div>
                <div className="comment-item">
                    <div className="comment-header">
                        <PersonIcon className='icon'/>
                        {userList && <span className='userName'>{userList[9].name}</span>}
                        <span className="dot"></span>
                        <span className="score">4.4</span>
                    </div>
                    <div className="comment-body">
                        {comments[99].body}
                    </div>
                </div>
                <div className="comment-item">
                    <div className="comment-header">
                        <PersonIcon className='icon'/>
                        {userList && <span className='userName'>{userList[5].name}</span>}
                    <span className="dot"></span>
                    <span className="score">4.7</span>
                    </div>
                    <div className="comment-body">
                        {comments[55].body}
                    </div>
                </div>
                <div className="comment-item">
                    <div className="comment-header">
                        <PersonIcon className='icon'/>
                        {userList && <span className='userName'>عباس بوعذار</span>}
                    <span className="dot"></span>
                    <span className="score">4.2</span>
                    </div>
                    <div className="comment-body">
                        {comments[14].body}
                    </div>
                </div>
                <div className="comment-item">
                    <div className="comment-header">
                        <PersonIcon className='icon'/>
                        {userList && <span className='userName'>نادر ولیزاده</span>}
                    <span className="dot"></span>
                    <span className="score">4.4</span>
                    </div>
                    <div className="comment-body">
                        {comments[10].body}
                    </div>
                </div>
                <div className="comment-item">
                    <div className="comment-header">
                        <PersonIcon className='icon'/>
                        {userList && <span className='userName'>{userList[1].name}</span>}
                        <span className="dot"></span>
                        <span className="score" style={{backgroundColor: '#F90716'}}>2.8</span>
                    </div>
                    <div className="comment-body">
                        {comments[77].body}
                    </div>
                </div>
                <div className="comment-item">
                    <div className="comment-header">
                        <PersonIcon className='icon'/>
                        {userList && <span className='userName'>{userList[8].name}</span>}
                        <span className="dot"></span>
                        <span className="score">4.8</span>
                    </div>
                    <div className="comment-body">
                        {comments[86].body}
                    </div>
                </div> 
                </>
                : null}
            </div>
        </>
    )
}

export default Comment