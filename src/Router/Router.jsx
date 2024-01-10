import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayOut from "../LayOut/MainLayOut";
import SearchPage from "../Pages/SearchPage/SearchPage";

const router =createBrowserRouter([
    {
        path:'/',
        element:<MainLayOut/>,
        children:[
            {
              path:"/",
              element:<App/>,
            },
            {
                path:'/search/:searchTerm',
                element:<SearchPage/>
            }
        ]
    }
])

export default router;