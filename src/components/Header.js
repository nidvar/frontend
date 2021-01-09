import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = ()=>{
    return(
        <div className='myHeader'>
            <h1>Header</h1>
            <Link to='/'>
                Streamy
            </Link>
            <div>
                <Link to='/'>
                    Streamy
                </Link>
            </div>
            <div>
                <Link to='/'>
                    All Streams
                </Link>
            </div>
            <GoogleAuth />
        </div>
    )
}

export default Header