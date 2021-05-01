import React from 'react'
import './../all-css.css'
import Search from './../Search';
import LoginBar from './../LoginBar';
import { AiOutlineClose } from "react-icons/ai";
import OutsideClickHandler from 'react-outside-click-handler';
import {Click} from './../../App'

export function Toggle(name,boolean){
    boolean=parseInt(boolean);
    if(boolean===1){
        document.getElementById(name).style.display='block';
        document.getElementById(name).style.transition='all 2s linear';
    }else{
        document.getElementById(name).style.display='none';
    }
}
function Navigation({data}){
    const Home=()=>{
        Click('home');
        Toggle('mobile-menu',0);
    }
    const Policies=()=>{
        Click('policies');
        Toggle('mobile-menu',0);
    }
    const Faq=()=>{
        Click('faq');
        Toggle('mobile-menu',0);
    }
  return(
    <div className="mobile-menu" id="mobile-menu">
    <OutsideClickHandler
     onOutsideClick={() => {
         Toggle('mobile-menu',0);
     }}>
         <div className="mobile-menu1">
        <AiOutlineClose className="menu-bar" style={{margin: "5px 5px"}} onClick={Toggle.bind(this,"mobile-menu",0)}></AiOutlineClose>
        <Search></Search>
            
            <div className="pro" style={{marginTop:"8px", display:"block"}}>
                <h4 onClick={Home}>Home</h4>
                <h4 >Collections</h4>
                <h4 style={{fontWeight: "400", margin: "8px 25px"}}>T Shirt</h4>
                <h4 style={{fontWeight: "400", margin: "8px 25px"}}>Polo</h4>
                <h4 style={{fontWeight: "400", margin: "8px 25px"}}>TurtleNecks</h4>
                <h4 style={{fontWeight: "400", margin: "8px 25px"}}>Hoodies</h4>
                <h4 style={{fontWeight: "400", margin: "8px 25px"}}>Basicx Full</h4>
                <h4 style={{fontWeight: "400", margin: "8px 25px"}}>Sleeves</h4>
                <h4 onClick={Policies}>Policies</h4>
                <h4 onClick={Faq}>FAQ</h4>
                <LoginBar data={data}></LoginBar>
            </div>
        </div>
</OutsideClickHandler>
    </div>
  )
}
export default Navigation;