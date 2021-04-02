import React from 'react'
import './Footer.css'
import ReactDOM from 'react-dom'
import { AiOutlineFacebook } from 'react-icons/ai'
import { AiOutlineWhatsApp} from 'react-icons/ai'
import { FaInstagramSquare} from 'react-icons/fa'
import { AiOutlineMail} from 'react-icons/ai'

function Footer() {

    return ( 
        <div className = 'footer-box' >
            
             <div className = 'footer-box1' >
                 <div className = 'bx1'>
                     <AiOutlineFacebook className = 'f'></AiOutlineFacebook>
                 </div>
                 <div className = 'bx1'>
                 <AiOutlineWhatsApp className = 'f'></AiOutlineWhatsApp>
                 </div>
                 <div className = 'bx1'>
                 <FaInstagramSquare className = 'f'></FaInstagramSquare>
                 </div>
                 <div className = 'bx1'>
                 <AiOutlineMail className = 'f'></AiOutlineMail>
                 </div>
              
             </div>
            <div className = 'footer-box2' >
            </div>
        </div>
    );
}
export default Footer;