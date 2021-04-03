import React from 'react'
import './Footer.css'
import ReactDOM from 'react-dom'
import { AiOutlineFacebook } from 'react-icons/ai'
import { AiOutlineWhatsApp} from 'react-icons/ai'
import { FaInstagramSquare} from 'react-icons/fa'
import { AiOutlineMail} from 'react-icons/ai'
import { FaCcVisa} from 'react-icons/fa'
import { FaCcAmex} from 'react-icons/fa'
import { FaCcMastercard} from 'react-icons/fa'


function Footer() {

    return ( 
        <div className = 'footer-box' >
            
             <div className = 'footer-box1' >
                 <div className = 'bx2'>
                     <h4>Letest News</h4>
                     <p>Comming Soon</p>
                 </div>
                 <div className = 'bx2'>
                 <h4>Follow Us</h4>
                 <AiOutlineWhatsApp className = 'f' style={{color: 'green'}}></AiOutlineWhatsApp>
                 <AiOutlineFacebook className = 'f' style={{color: '#127AF2'}}></AiOutlineFacebook>
                 </div>

                 <div className = 'bx2'>
                 <h4>Newsletter</h4>
                 <p>Sign up for the latest news, offers and styles</p>
              
                 <input placeholder = 'Your Email'></input>
                 <button>SUBSCRIBE</button>
                
                 </div>
                <div className = 'bx2'>
               <h4>Navigate</h4>
               <li>Home</li>
               <li>Collections</li>
               <li>FAQ</li>
               <li>Policies</li>
                 </div>
              
             </div>
            <div className = 'footer-box2' >
                <p>Copyright © 2021, Neoteric BD</p>
                <FaCcVisa className = 'f' ></FaCcVisa>
                <FaCcAmex className = 'f' ></FaCcAmex>
                <FaCcMastercard className = 'f' ></FaCcMastercard>
            
            </div>
        </div>
    );
}
export default Footer;
//  <AiOutlineMail className = 'f'></AiOutlineMail>

//<FaInstagramSquare className = 'f'></FaInstagramSquare>