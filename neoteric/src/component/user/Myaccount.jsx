import React,{useState,useEffect} from 'react';
import './Myaccount.css';
import {FiShoppingCart} from 'react-icons/fi'
import{VscListUnordered} from 'react-icons/vsc'
import {BsFilePost} from 'react-icons/bs'
import {AiFillFileAdd} from 'react-icons/ai'
import {SiGooglemessages} from 'react-icons/si'
import {DiGitPullRequest} from 'react-icons/di'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Mycart from './Mycart';
const Myaccount = (props) => {
    const [indigate,setIndigate]=useState(null);
    const Select=(p)=>{
        document.getElementById(p).style.borderBottom='2px solid chartreuse';
        if(indigate!==null){
            document.getElementById(indigate).style.borderBottom='none';
        }
        setIndigate(p);
        if(p==='messages'){
            document.getElementById('bell').style.display='none';
        }
    }

    useEffect(() => {
        

    }, [])
    return (
        <div className='account-div'>
            <Router>
            <div className='section1'>
                
                <div className='full-views' id='cart'>
                    <FiShoppingCart className='icon'></FiShoppingCart>
                    <Link to='/my-acc/cart' className='link' onClick={Select.bind(this,'cart')}>
                    <h4>My Card</h4>
                    </Link>
                </div>
                <div className='full-views' id='orders'>
                    <VscListUnordered className='icon'></VscListUnordered>
                    <Link to='/my-acc/orders' className='link' onClick={Select.bind(this,'orders')}>
                    <h4>My Orders</h4>
                    </Link>
                </div>
                <div className='full-views' id='posts'>
                    <BsFilePost className='icon'></BsFilePost>
                    <Link to='/my-acc/posts' className='link' onClick={Select.bind(this,'posts')}>
                    <h4>My Posts</h4>
                    </Link>
                </div>
                <div className='full-views' id='add'>
                    <AiFillFileAdd className='icon'></AiFillFileAdd>
                    <Link to='/my-acc/add' className='link' onClick={Select.bind(this,'add')}>
                    <h4>Add Post</h4>
                    </Link>
                </div>
                <div className='full-views' id='seller'>
                    <DiGitPullRequest className='icon'></DiGitPullRequest>
                    <Link to='/my-acc/seller' className='link' onClick={Select.bind(this,'seller')}>
                    <h4>Became Seller</h4>
                    </Link>
                </div>
                <div className='full-views' id='messages'>
                    <div className='bell'>
                    <SiGooglemessages className='icon'></SiGooglemessages>
                    <span id='bell'></span>
                    </div>
                    <Link to='/my-acc/messages' className='link' onClick={Select.bind(this,'messages')}>
                    <h4>Messages</h4>
                    </Link>
                </div>

            </div>
            <div className='section2'>
                <Route path='/my-acc/cart'>
                    <Mycart></Mycart>
                </Route>
                <Route path='/my-account'>
                    <h4>Select an Option</h4>
                </Route>
            </div>
            </Router>
        </div>
    );
};

export default Myaccount;