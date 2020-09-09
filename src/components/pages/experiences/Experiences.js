import React from 'react';

export default function Experiences() {
    return (
        <>
            <div className='card'>
                <div className='card-content'>
                    <h6>
                        <strong>EXPERIENCE</strong>
                    </h6>
                    {/* First */}
                    <div className='row mt-top'>
                        <div className='col x14 14 m6 s12'>
                            <p className='teal year_exp white-text'>
                                Feb <strong>2020</strong> - Present
                            </p>
                        </div>
                        <div className='col x18 18 m6 s12'>
                            <blockquote className='no-pad'>
                                <h6 className='no-pad mt-bottom'>
                                    <strong>Full Stack Developer Intern</strong>
                                </h6>
                                <p>
                                    Building an ID Card Repository using ReactJS, Ant Design, Strapi, and MongoDB.
                                </p>
                            </blockquote>
                        </div>
                    </div>
                    {/* Second */}
                    <div className='row mt-top'>
                        <div className='col x14 14 m6 s12'>
                            <p className='teal year_exp white-text'>
                                July <strong>2020</strong> - Present
                            </p>
                        </div>
                        <div className='col x18 18 m6 s12'>
                            <blockquote className='no-pad'>
                                <h6 className='no-pad mt-bottom'>
                                    <strong>Front-End Developer Intern</strong>
                                </h6>
                                <p>
                                    Creating Single-Sign On (SSO) feature for internal company service.
                                </p>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
