import AIMLDL from "../pages/AIMLDL";
import P5Visuals from "../pages/P5Visuals";
import FrontPage from "../pages/FrontPage";

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
        path:"/aimldl",
        element:<P5Visuals/>
    }
]


export default routes;