import React from 'react';
import './Alert.css';
import OutsideClickHandeler from 'react-outside-click-handler';

export const ShowAlert=(head,text)=>{
    document.getElementById('head').innerHTML=head;
    document.getElementById('txtt').innerHTML=text;
    document.getElementById('alert').style.display='flex';
    
}
export const HideAlert=()=>{
    document.getElementById('alert').style.display='none';
}
const Alertt=()=>{
    return(
        <div className='alert' id='alert'>
            <OutsideClickHandeler onOutsideClick={()=>{
                HideAlert();
            }}>
                <div className='bx11'>
                    <div className='bx22'>
                        <h5 id='head'>Hi</h5>
                    </div>
                    <div className='bx22'>
                        <p id='txtt'>Details</p>
                    </div>
                    <div className='bx22'>
                        <button onClick={HideAlert}>Close</button>
                    </div>
                </div>
            </OutsideClickHandeler>
        </div>
    )
}
export default Alertt;