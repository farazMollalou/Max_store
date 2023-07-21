import React from 'react'
import { Comment, FidgetSpinner, ProgressBar } from 'react-loader-spinner'
import './Loader.css';

function Loader(props) {
    return (
        <>
            <div className="loader-container">
                {props.loaderType === 'dna' &&
                    <FidgetSpinner
                        visible={true}
                        height={props.size}
                        width={props.size}
                        ariaLabel="dna-loading"
                        wrapperStyle={{}}
                        wrapperClass="dna-wrapper"
                        ballColors={['#ff0000', '#00ff00', '#0000ff']}
                        backgroundColor="#8c0099"
                    />
                }

                {props.loaderType === 'progressbar' && <ProgressBar
                    height={props.size}
                    width={props.size}
                    ariaLabel="progress-bar-loading"
                    wrapperStyle={{}}
                    wrapperClass="progress-bar-wrapper"
                    borderColor='#FF0032'
                    barColor='#FAC213'
                />}

                {
                    props.loaderType === 'comment' && <Comment
                        visible={true}
                        height="220"
                        width="220"
                        ariaLabel="comment-loading"
                        wrapperStyle={{}}
                        wrapperClass="comment-wrapper"
                        color="#fff"
                        backgroundColor="#F4442E"
                    />
                }
            </div>
        </>
    )
}

export default Loader