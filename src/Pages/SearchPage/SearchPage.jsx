import TuneIcon from '@mui/icons-material/Tune';
import './SearchPage.css'
import ChannelRow from '../../components/ChannelRow.jsx/ChannelRow';
import VideoRow from '../../components/VideoRow/VideoRow';

const SearchPage = () => {
    return (
        <div className='search_Page'>
            <div className='search_fiter'>
                <TuneIcon/>
                <h2 className='text-lg'>Filter</h2>
            </div>
            <hr />
            <ChannelRow
              image='https://yt3.googleusercontent.com/ytc/AIf8zZRDiiescilO4rYZXxwz6KSGMNFSiw0HxvQ9C8cvpw=s176-c-k-c0x00ffffff-no-rj'
              chanel="Infinity"
              verified
              subs="550k"
              noOfVideos={250}
              description="You can find awesome programing video"
            />
            <hr />
            <VideoRow
               
            />
        </div>
    );
};

export default SearchPage;