import { Button } from '@material-ui/core';
import React from 'react';

const Seller = (props) => {
    return (
        <div className='seller'>
            {
                props.user.admin===true?(
                    <h4>You are already a seller.</h4>
                ):(
                    <div className='seller1'>
                    <Button variant="contained" color="primary">Request</Button>
                    </div>
                )
            }
            
        </div>
    );
};

export default Seller;