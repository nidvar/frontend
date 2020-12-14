import React from 'react';
import {Link} from 'react-router-dom';

const Header = ()=>{
    return(
        <div>
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
        </div>
    )
}

export default Header