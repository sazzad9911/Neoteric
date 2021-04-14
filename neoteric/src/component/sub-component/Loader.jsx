import React from 'react';
import './Loader.css'

export const ShowLoader=()=>{
document.getElementById('loader').style.display='flex';
}
export const HideLoader=()=>{
    document.getElementById('loader').style.display='none';
}
const Loader=()=>{
    return(
        <div className='loader' id='loader'>
            <div className="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            </div>
        </div>
    )
}
export default Loader