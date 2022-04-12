import {BrowserRouter, Routes,Route} from 'react-router-dom';
import {GlobalStyles} from './config/global';

import Login from './views/login';
import Home from './views/home';
import { ContextProvider } from './contexts/Context';
const Router = () => {
    return (
        <ContextProvider>
            <BrowserRouter>
                <GlobalStyles/>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/home" element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </ContextProvider>
    )
}

export default Router;