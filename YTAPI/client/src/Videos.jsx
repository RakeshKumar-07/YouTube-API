import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

import './Videos.css';

const Videos = () => {

    const {q} = useParams();

    const [data, setData] = useState([
        {
            id : {kind: 'youtube#video', videoId: ''},
            snippet : {
                description : "PLease Wait...",
                publishedAt : "",
                thumbnails : {
                    high : {url: 'https://media.istockphoto.com/id/1312039882/vector/coming-soon-loading.jpg?s=612x612&w=0&k=20&c=wIjdvr139iG1IZUVOmSfeLrRx6NXqBMxMJ026kMo2XY=', width: 480, height: 360}
                },
                title: "Content Loading in 10sec"
            }
        }
    ]);

    useEffect(() => {
        setInterval( async () => {
        await axios.get(`/${q}`)
        .then(response => setData(response.data[0]))
        }, 10000)
    },[]);

    console.log(data);

    return(
        <div className='result'>
                { data.length > 1 ?
                    data.map((element) =>
                        <div key={element.id.videoId}>
                            <div className='Card'>
                                <div className='thumbnail'>
                                    <a href={`https://www.youtube.com/watch?v=${element.id.videoId}`}><img src={element.snippet.thumbnails.high.url} alt="" /></a>
                                </div>
                                <div className='info'>
                                    <div className='title'>Title: {element.snippet.title}</div>
                                    <div className='description'>
                                        Description: {element.snippet.description}
                                    </div>
                                    <div className='published'>
                                        Published On: {element.snippet.publishedAt.slice(0,10)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ):
                    data.map(element => 
                        <div key={element.id.videoId}>
                            <div className='Card'>
                                <div className='thumbnail'>
                                    <img src={element.snippet.thumbnails.high.url} alt="" />
                                </div>
                                <div className='info'>
                                    <div className='title'> {element.snippet.title}</div>
                                    <div className='description'>
                                        {element.snippet.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
        </div>
    )

}

export default Videos;
