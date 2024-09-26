import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import Home from '../Pages/Home/Home'
import About from "../Pages/About/About";
import Signup from "../Pages/Singup/Signup";
import Login from "../Pages/Login/Login";
import Resetpassword from "../Pages/ResetPassword/Resetpassword";


const router = createBrowserRouter([{
    path: '/',
    element: <App />,

    children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'signup', element: <Signup /> },
        { path: 'login', element: <Login /> },
        { path: 'resetpassword', element: <Resetpassword /> }
    ]
}])


export default router