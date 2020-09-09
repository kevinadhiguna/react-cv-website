import React from 'react';

export default function Skills() {
    return (
        <>
            <div className='card'>
                <div className='card-content'>
                    <h6>
                        <strong>PROFESSIONAL SKILLS</strong>
                    </h6>
                    {/* First Row */}
                    <div className='row mt-top'>
                        <div className='col s6'>
                            <p>ReactJS</p>
                            <div className='progress grey lighten-1'>
                                <div
                                    className='determinate blue'
                                    style={{ width: '85%' }}
                                ></div>
                            </div>
                        </div>
                        <div className='col s6'>
                            <p>React Native</p>
                            <div className='progress grey lighten-1'>
                                <div
                                    className='determinate blue'
                                    style={{ width: '82%' }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    {/* Second Row */}
                    <div className='row'>
                        <div className='col s6'>
                            <p>JavaScript</p>
                            <div className='progress grey lighten-1'>
                                <div
                                    className='determinate blue'
                                    style={{ width: '80%' }}
                                ></div>
                            </div>
                        </div>
                        <div className='col s6'>
                            <p>Python</p>
                            <div className='progress grey lighten-1'>
                                <div
                                    className='determinate blue'
                                    style={{ width: '82%' }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    {/* Third Row */}
                    <div className='row'>
                        <div className='col s6'>
                            <p>HTML / CSS</p>
                            <div className='progress grey lighten-1'>
                                <div
                                    className='determinate blue'
                                    style={{ width: '88%' }}
                                ></div>
                            </div>
                        </div>
                        <div className='col s6'>
                            <p>MySQL</p>
                            <div className='progress grey lighten-1'>
                                <div
                                    className='determinate blue'
                                    style={{ width: '82%' }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
