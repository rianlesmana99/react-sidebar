import { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from '../../components/Navigation/Sidebar';
import LandingPage from '../pages/LandingPage';
import AboutPage from '../pages/AboutPage';
import ServicePage from '../pages/ServicePage';

class Home extends Component {
    render() {
        return (
            <BrowserRouter>
                <Sidebar />
                <Routes>
                    <Route path='/' element={<LandingPage />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/service' element={<ServicePage />} />
                </Routes>
            </BrowserRouter>
        )
    }
}

export default Home;