import SidebarRow from "../sidebarRow/sidebarRow";
import "./Dashboard.css"
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';




const Dashboard = () => {
    return (
        <div className="dashboard">
            <SidebarRow selected Icon={HomeIcon} title="Home"/>
            <SidebarRow Icon={WhatshotIcon} title="Trending"/>
            <SidebarRow Icon={SubscriptionsIcon} title="Subscription"/>
        </div>
    );
};

export default Dashboard;