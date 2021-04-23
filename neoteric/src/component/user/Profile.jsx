import React from 'react'
import './Profile.css'
import {BiRename} from 'react-icons/bi'
import {AiOutlinePhone} from 'react-icons/ai'
import firebaseApp from './../../firebase'
import {Refresh} from './../../App'
import {ShowLoader,HideLoader} from './../sub-component/Loader'
import {ShowAlert} from './../sub-component/Alert'
import { getStorage, ref, uploadBytes } from "firebase/storage";
var mysql = require('mysql');

const Profile=({data})=>{
    if(data===null){
        window.location.href='/';
    }
    var con = mysql.createConnection({
        host: "sql305.byethost32.com",
        user: "b32_25839656",
        password: "mhpq79ry"
      });
      
      con.connect(function(err) {
        if (err) throw err;
        console.log("Connected mysql!");
      });
    const SaveData=()=>{
        ShowLoader();
        var name=document.getElementById('name').value;
        var phone=document.getElementById('phone').value;
        var address=document.getElementById('address').value;
        var db=firebaseApp.firestore()
        if(name===''){
            name=data.name;
        }
        if(phone===''){
            phone=data.phone;
        }if(address===''){
            address=data.address;
        }
        db.collection('user').doc(data.id).update({
            name:name,
            phone: phone,
            address: address
        }).then(function(){
            HideLoader();
            ShowAlert('Successfull!','Changes save successfull.');
        })
    }
const OpenFile=()=>{
    document.getElementById('file').click();
    UploadImage();
}
const UploadImage=()=>{
    ShowLoader();
    //var mysql = require('mysql');


}

    return(
        <div className='profilee'>
          <div className='p-box0'>
             <input type='file' className='file' id='file'>
             </input>
             <div className='p-img' onClick={UploadImage}>
             <img src={data.img} alt='pr'></img>
             </div>
             <div className='p-box1'>
                 <BiRename></BiRename><input type="text" placeholder={data.name} style={{fontSize:'20px'}} id='name'/><br></br>
                 <AiOutlinePhone></AiOutlinePhone><input type="text" id='phone' placeholder={data.phone} style={{fontSize:'17px'}}/>
             </div>
         </div>
             <h4>Other Information</h4>
             <div className='p-box0'>
                <div className='p-box1' style={{width:'90%', display: 'flex'}}>
                    <p>Address: </p>
                <input type='text' id='address' placeholder={data.address} style={{borderBottom:'1px solid black', fontSize:'16px'}}></input>
                </div>
                <div className='p-box1' style={{width:'90%', display: 'flex'}}>
                    <button onClick={SaveData}>Save Changes</button>
                </div>
             </div>
        </div>
    )
}
export default Profile;