import React from "react";


const VideoDetail = ({video})=>{
    if(!video){
        return <div>Loading.....</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

return (<div> <div className="width ui segment">
                <iframe src={videoSrc} title="boo" />
            </div>
            <h1>{video.snippet.title}</h1> 
            <p>{video.snippet.description}</p>
            </div>)
}

export default VideoDetail;