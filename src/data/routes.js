import AIMLDL from "../pages/AIMLDL";
import P5Visuals from "../pages/P5Visuals";
import FrontPage from "../pages/FrontPage";
import EDA from "../pages/EDA";

const routes = [
    {
        title:"AIMLDL",
        path:'/',
        element:<FrontPage/> 
    },
    {
        title:"AIMLDL",
        path:"/aimldl",
        element:<AIMLDL/>
    },
    {
        title:"P5JS",
        path:"/eda",
        element:<EDA/>
    }
]


export default routes;