import React from 'react'
import './Login.css'
import {AiOutlineMail} from 'react-icons/ai';
import {RiLockPasswordLine} from 'react-icons/ri';
import {CgLogIn} from 'react-icons/cg';
import {BiRename} from 'react-icons/bi';
import firebaseApp from './../../firebase';

const Login=()=>{
    const Create=()=>{
        document.getElementById('bx-name').style.display='flex';
        document.getElementById('txt').innerHTML='Create Account';
        document.getElementById('bx-password1').style.display='flex';
        document.getElementById('bx-login').style.display='none';
        document.getElementById('bx-signup').style.display='flex';
        document.getElementById('bx-send').style.display='none';
        document.getElementById('bx-password').style.display='flex';
        document.getElementById('create').style.display='none';
        document.getElementById('forget').style.display='none';
    }
    const Back=()=>{
        document.getElementById('bx-name').style.display='none';
        document.getElementById('txt').innerHTML='LogIn Here';
        document.getElementById('bx-password1').style.display='none';
        document.getElementById('bx-login').style.display='flex';
        document.getElementById('bx-signup').style.display='none';
        document.getElementById('bx-send').style.display='none';
        document.getElementById('bx-password').style.display='flex';
        document.getElementById('create').style.display='flex';
        document.getElementById('forget').style.display='flex';
    }
    const Forget=()=>{
        document.getElementById('bx-name').style.display='none';
        document.getElementById('txt').innerHTML='Forget Password';
        document.getElementById('bx-password1').style.display='none';
        document.getElementById('bx-login').style.display='none';
        document.getElementById('bx-signup').style.display='none';
        document.getElementById('bx-send').style.display='flex';
        document.getElementById('bx-password').style.display='none';
        document.getElementById('create').style.display='none';
        document.getElementById('forget').style.display='none';
    }
    const CreateAccount=()=>{
        const email=document.getElementById('email').value;
        const password=document.getElementById('password').value;
        const repassword=document.getElementById('repassword').value;
        const name=document.getElementById('name').value;

        if(name===''){
            document.getElementById('bx-name').style.border='1px solid red';
            return;
        }else{
            document.getElementById('bx-name').style.border='1px solid green';
        }
        if(password!==repassword){
            document.getElementById('bx-password1').style.border='1px solid red';
            return;
        }else{
            document.getElementById('bx-password1').style.border='1px solid green';
        }
        

    }
    return(
        <div className='login'>
            <div className='bx1'>
                <div className='bx'>
                <h4 id='txt'>LogIn Here</h4>
                </div>
                <div className='bx'>
                <div className='input' id='bx-name'>
                        <BiRename></BiRename>
                        <input type='text' placeholder='Enter Name...' id='name'>
                        </input>
                    </div>
                    <div className='input' id='bx-email'>
                        <AiOutlineMail className='icon'></AiOutlineMail>
                        <input type='email' placeholder='Enter Email...' id='email'>
                        </input>
                    </div>
                    <div className='input' id='bx-password'>
                        <RiLockPasswordLine></RiLockPasswordLine>
                        <input type='password' placeholder='Enter Password...' id='password'>
                        </input>
                    </div>
                    <div className='input' id='bx-password1'>
                        <RiLockPasswordLine></RiLockPasswordLine>
                        <input type='password' placeholder='Rewrite Password...' id='repassword'>
                        </input>
                    </div>
                    <div className='input' id='bx-login'>
                        <CgLogIn></CgLogIn>
                        <input type='submit' value='LogIn'>
                        </input>
                    </div>
                    <div className='input' id='bx-signup' onClick={CreateAccount}>
                        <CgLogIn></CgLogIn>
                        <input type='submit' value='SignUp'>
                        </input>
                    </div>
                    <div className='input' id='bx-send'>
                        <CgLogIn></CgLogIn>
                        <input type='submit' value='Send'>
                        </input>
                    </div>
                </div>
                <div className='bx' style={{marginTop: '25px'}}>
                    <button onClick={Create} id='create'>Create Account?</button>
                    <button onClick={Forget} id='forget'>Forget Password?</button>
                    <button onClick={Back}>Back</button>
                </div>
                <div className='bx'>
                    <p>@All Right Reserved By Neoteric BD</p>
                </div>            
            </div>
        </div>
    )
}
export default Login;