import React from 'react';

export default function About() {
    return (
        <>
            <div className='card'>
                <div className='card-content'>
                    <h6 className='mt-bottom'>
                        <strong>ABOUT ME</strong>
                    </h6>
                    <p className='grey-text'>
                        An Information Technology enthusiast with primary focus on Front-End Development and Cyber Security.
                    </p>
                </div>
                <div className='card-action'>
                    <h6>
                        <strong>PERSONAL INFO</strong>
                    </h6>
                    <div className='row mt'>
                        <div className='col x16 16 m6 s12'>
                            <p>
                                <strong>Email :</strong> kevin26798@gmail.com
                            </p>
                            <p>
                                <strong>Personal Website :</strong> <a href='kevinadhiguna.netlify.app'>kevinadhiguna.netlify.app</a>
                            </p>
                            <p>
                                <strong>Github :</strong> kevinadhiguna
                            </p>
                        </div>
                        <div className='col x16 16 m6 s12'>
                            <p>
                                <strong>Main Language</strong> - Indonesian
                            </p>
                            <p>
                                <strong>Second Language</strong> - English
                            </p>
                            <p>
                                <strong>Third Language</strong> - Japanese
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
