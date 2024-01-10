
const VideoRow = (props) => {
    const {views,subs,description,timestamp,chanel,title,image}=props
    return (
        <div className="flex max-w-[700px] mb-[30px]">
            <img className="object-contain w-[246px] h-[138px]" src={image} alt={chanel}/>
            <div className="ml-14px">
               <h3 className="text-xl font-semibold ">{title}</h3>
               <p className="text-sm text-[#606060]">{chanel} . <span className="text-blue-700">{subs}</span> Subscribers {views} . Views {timestamp}</p>
               <p className="mt-20px text-[14px] text-[#606060]">{description}</p>
            </div>
        </div>
    );
};

export default VideoRow;