import React from "react";
import "./search.css"


const VideoItem = ({ video, onVideoSelect })=>{
    return(
        <div onClick={()=>{return onVideoSelect(video)}} >
            <img className="ui image onclick" src={video.snippet.thumbnails.medium.url} alt="foo" />
            <div className="content onclick">
                <div className="header">
                {video.snippet.title}
                </div>
            </div>
        </div>
    )
}

export default VideoItem;