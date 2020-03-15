import React from 'react';


const VideoDetail = ({video})=>{
    if(!video){
        return <div>choose something...</div>;
    }

    const videoUrl = `https://youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <div className="ui embed">
                <iframe src={videoUrl} title="video player"/>  
            </div>
            <div className="ui segment"> 
                <h4><div>{video.snippet.title}</div></h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
}

export default VideoDetail;