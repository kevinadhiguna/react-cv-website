import React from 'react';

import Navbar from '../navbar/Navbar';
import Profile from './profile/Profile';
import About from './about/About';
import Skills from './skills/Skills';
import Experiences from './experiences/Experiences';
import Educations from './educations/Educations';
import Portofolios from './portofolios/Portofolios';
import Certificates from './certificates/Certificates';

export default function Home() {
    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='row'>
                    <div className='col s12 m3'>
                        <Profile />
                    </div>
                    <div className='col s12 m9'>
                        <About />
                        <Skills />
                        <Experiences />
                        <Educations />
                        <Portofolios />
                        <Certificates />
                    </div>
                </div>
            </div>
        </>
    );
}
