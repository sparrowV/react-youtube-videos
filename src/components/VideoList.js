import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videoList,onVideoSelect}) => {
    const videoItems = videoList.map((video)=>{
        return <VideoItem
                    key={video.id.videoId}
                    onVideoSelect={onVideoSelect} 
                    video={video}
                />;
    });
    return <div className="ui relaxed divided list">{videoItems} </div>;
}

export default VideoList;