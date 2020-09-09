import React from 'react';

export default function Educations() {
    return (
        <>
            <div className='card'>
                <div className='card-content'>
                    <h6>
                        <strong>EDUCATIONS</strong>
                    </h6>
                    <table className='striped'>
                        <thead>
                            <tr>
                                <th>School / College</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>SMAN 3 Bandung</td>
                                <td>July 2015 - May 2017</td>
                                {/* <td>
                                    <Link to='/details' className='btn blue lighten-2'>
                                        View
                                    </Link>
                                </td> */}
                            </tr>
                            <tr>
                                <td>Padjadjaran University</td>
                                <td>August 2017 - Present</td>
                                {/* <td>
                                    <Link to='/details' className='btn blue lighten-2'>
                                        View
                                    </Link>
                                </td> */}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
