import React,{useState,useEffect} from 'react';
import './Myaccount.css';
import {FiShoppingCart} from 'react-icons/fi'
import{VscListUnordered} from 'react-icons/vsc'
import {BsFilePost} from 'react-icons/bs'
import {AiFillFileAdd} from 'react-icons/ai'
import {SiGooglemessages} from 'react-icons/si'
import {DiGitPullRequest} from 'react-icons/di'
import {AiFillSetting} from 'react-icons/ai'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Mycart from './Mycart';
import { Bar} from 'react-chartjs-2'
import Myorders from './Myorders';
import Mypost from './Mypost';
import Addpost from './Addpost';
import Messages from './Messages';
import firebaseApp from '../../firebase';
import Seller from './Seller';
import Settings from './Settings';



const Myaccount = (props) => {
    const [indigate,setIndigate]=useState(null);
    const [check,setCheck]=useState(null);
    const [postt,setPost]=useState(null);
    const [mypostt,setMy]=useState(null);
    const Select=(p)=>{
        document.getElementById(p).style.borderBottom='2px solid chartreuse';
        if(indigate!==null){
            document.getElementById(indigate).style.borderBottom='none';
        }
        setIndigate(p);
        if(p==='messages'){
            document.getElementById('bell').style.display='none';
            let db=firebaseApp.firestore();
            db.collection('user').doc(props.user.id).update({
                message:0
            });
        }
    }
    const Click=(d)=>{
        document.getElementById('c-'+d).click();
        Select(d);
    }

    useEffect(() => {
    var post=[];
    var mypost=[];
        for(var j=0;j<props.admin.collections.length;j++){
            let n=0,m=0;
            for(var i=0;i<props.posts.length;i++){
                if(props.posts[i].type===props.admin.collections[j]){
                    n++;
                    if(props.posts[i].uid===props.user.id){
                        m++;
                    }
                }
            } 
            post[j]=n;
            mypost[j]=m;
            setPost(post);
            setMy(mypost);
        }
        //console.log(post)
        console.log(post);
        console.log(mypost);
        if(props.user.message>0){
            document.getElementById('bell').style.display='initial';
        }else{
            document.getElementById('bell').style.display='none';
        }

        if(props.user.admin===true){
            setCheck('flex');
        }else{
            setCheck('none');
        }
    }, [])
    return (
        <div className='account-div'>
            <Router>
                <Link to='/my-acc/cart' id='c-cart'></Link>
                <Link to='/my-acc/orders' id='c-orders'></Link>
                <Link to='/my-acc/posts' id='c-posts'></Link>
                <Link to='/my-acc/add' id='c-add'></Link>
                <Link to='/my-acc/seller' id='c-seller'></Link>
                <Link to='/my-acc/setting' id='c-setting'></Link>
                <Link to='/my-acc/messages' id='c-messages'></Link>
            <div className='section1'>
                <div className='full-views' id='cart' onClick={Click.bind(this,'cart')}>
                    <FiShoppingCart className='icon'></FiShoppingCart>
                    <h4>My Card</h4>
                </div>
                <div className='full-views' id='orders' onClick={Click.bind(this,'orders')}>
                    <VscListUnordered className='icon'></VscListUnordered>
                    <h4>My Orders</h4>
                </div>
                <div className='full-views' id='posts' onClick={Click.bind(this,'posts')} style={{display:check}}>
                    <BsFilePost className='icon'></BsFilePost>
                    <h4>My Posts</h4>
                </div>
                <div className='full-views' id='add' onClick={Click.bind(this,'add')} style={{display:check}}>
                    <AiFillFileAdd className='icon'></AiFillFileAdd>
                    <h4>Add Post</h4>
                </div>
                <div className='full-views' id='seller' onClick={Click.bind(this,'seller')}>
                    <DiGitPullRequest className='icon'></DiGitPullRequest>
                    <h4>Became Seller</h4>
                </div>
                <div className='full-views' id='setting' onClick={Click.bind(this,'setting')} style={{display:check}}>
                    <AiFillSetting className='icon'></AiFillSetting>
                    <h4>Setting</h4>
                </div>
                <div className='full-views' id='messages' onClick={Click.bind(this,'messages')}>
                    <div className='bell'>
                    <SiGooglemessages className='icon'></SiGooglemessages>
                    <span id='bell'></span>
                    </div>
                    <h4>Messages</h4>
                </div>

            </div>
            <div className='section2'>
                <Route path='/my-acc/cart'>
                    <Mycart user={props.user}></Mycart>
                </Route>
                <Route path='/my-acc/orders'>
                    <Myorders user={props.user}></Myorders>
                </Route>
                <Route path='/my-acc/posts'>
                    <Mypost user={props.user}></Mypost>
                </Route>
                <Route path='/my-acc/add'>
                    <Addpost user={props.user} admin={props.admin}></Addpost>
                </Route>
                <Route path='/my-acc/messages'>
                    <Messages user={props.user}></Messages>
                </Route>
                <Route path='/my-acc/seller'>
                    <Seller user={props.user}></Seller>
                </Route>
                <Route path='/my-acc/setting'>
                    <Settings></Settings>
                </Route>
                <Route path='/my-account'>
            <div className='chart'>
                    <Bar
                    data={{
                        labels: props.admin.collections,
        datasets: [{
            label: 'Total Post',
            data: postt,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        },{
            label:'Your Post',
            data: mypostt,
            backgroundColor:'#85C1E9'
        }]
                    }}
                    width={1000}
                    height={1400}
                    options={{
                        maintainAspectRatio:false,
                    }}></Bar>
        </div>
                </Route>
            </div>
            </Router>
        </div>
    );
};

export default Myaccount;