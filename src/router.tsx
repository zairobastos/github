import {BrowserRouter, Routes,Route} from 'react-router-dom';
import {GlobalStyles} from './config/global';

import Login from './views/login';
import Home from './views/home';
const Router = () => {
    return (
        <BrowserRouter>
            <GlobalStyles/>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/home" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;