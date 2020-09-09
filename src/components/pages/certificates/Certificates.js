import React from 'react';

export default function Certificates() {
    return (
        <>
            <div className='card'>
                <div className='card-content'>
                    <h6>
                        <strong>CERTIFICATES</strong>
                    </h6>
                    <table className='striped'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Mark/Level</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>IELTS</td>
                                <td>6.5</td>
                                <td>August 2018</td>
                            </tr>
                            <tr>
                                <td>JLPT (Japanese Language Proficiency Test)</td>
                                <td>N1</td>
                                <td>December 2016</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
