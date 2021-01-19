import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';


function VideoSidebar({ likes, shares, messages }) {
    const [liked, setLiked] = useState(false);
    return (
        <div className="videoSidebar">
            <div className="VideoSidebar_button">
                {liked ? (
                    <FavoriteIcon fontSize="large" onClick={(e) => setLiked(false)} />
                ) : (
                        <FavoriteBorderIcon fontSize="large" onClick={e => setLiked(true)}/>
                        )}
                
                <p>{liked ? likes + 1 : likes}</p>
            </div>
            <div className="VideoSidebar_button">
                <MessageIcon fontSize="large"/>
                <p>{shares}</p>
            </div>
            <div className="VideoSidebar_button">
                <ShareIcon fontSize="large"/>
                <p>{messages}</p>
            </div>
       
            </div>
            
        )
}
export default VideoSidebar