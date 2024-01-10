/* eslint-disable react/prop-types */
import { Avatar } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import './ChannelRow.css'

const ChannelRow = (props) => {
    const {image,chanel,verified,subs,noOfVideos,description}=props
    
    return (
        <div className="flex items-center w-[70%]">
            <Avatar className="video_avatar" alt={chanel} src={image} />
            <div className="flex flex-col">
                <h2>{chanel}{verified && <CheckCircleOutlineIcon/>}</h2>
                <p>
                    {subs} subscribers . {noOfVideos} videos
                </p>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ChannelRow;