import React, {useState, useEffect} from 'react'
import './Feedback.scss';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Comment from '../Comment/Comment';
import axios from 'axios';

function Feedback({ product }) {

    let score_number = (product.score)

    const [users, setUsers] = useState(null)

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://jsonplaceholder.ir/users'
        }).then((result) => {
            setUsers(result.data)
            console.log(result)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <>
            <h4 className="title">نظرات </h4>
            <div className="feedback-container">
                <aside className='feedback-progress-container'>
                    <div className="row1">
                        <div className="score-box"><span className='score'>{product.score}</span> از 5</div>
                        <div className="star-box">
                            {
                                score_number === 3 ? <><StarIcon /><StarIcon /><StarIcon /><StarOutlineIcon /><StarOutlineIcon /></> :
                                    score_number > 3 && score_number < 4 ? <><StarIcon /><StarIcon /><StarIcon /><StarHalfIcon className='star-half' /><StarOutlineIcon /></> :
                                        score_number === 4 ? <><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarOutlineIcon /></> :
                                            score_number > 4 && score_number < 5 ? <><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarHalfIcon className='star-half' /></> :
                                                score_number === 5 ? <><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></> : null
                            }
                            <span>از مجموع 25 امتیاز</span>
                        </div>
                    </div>
                    <div className="progress-box">
                        <div className="feed-title">نظرسنجی</div>
                        <div className="item">
                            <div className="topic"><span>کیفیت و کارایی</span><span className='number'>{Math.floor(Math.random() * 15) + 7} دیدگاه</span></div>
                            <div className="bar-container">
                                <div className="good" style={{ width: "75%" }}></div>
                                <div className="normal" style={{ width: "8%" }}></div>
                                <div className="bad" style={{ width: "17%" }}></div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="topic"><span>تناسب قیمت و کیفیت</span><span className='number'>{Math.floor(Math.random() * 15) + 9} دیدگاه</span></div>
                            <div className="bar-container">
                                <div className="good" style={{ width: "62%" }}></div>
                                <div className="normal" style={{ width: "18%" }}></div>
                                <div className="bad" style={{ width: "20%" }}></div>
                            </div>
                        </div>
                    </div>
                </aside>
                <div className="comments-box">
                    <Comment userList={users}/>
                </div>
            </div>
        </>
    )
}

export default Feedback