import { Avatar } from "@mui/material";
import "./Video.css"

const Video = ({image,title,video,channel,views,timestamp,channelImage}) => {
    return (
        <div className="videoCard">
           <img className="videoCard_thumbnail" src={image} alt="channel" />
           <div className="video_info">
            <Avatar className="video_avatar" alt="channelImage" src={channelImage} />
            <div className="video_text">
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>
                    {views}.{timestamp}
                </p>
            </div>
           </div>
        </div>
    );
};

export default Video;