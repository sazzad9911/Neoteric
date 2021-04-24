import React from 'react'
import './Profile.css'
import {BiRename} from 'react-icons/bi'
import {AiOutlinePhone} from 'react-icons/ai'
import firebaseApp from './../../firebase'
import {Refresh} from './../../App'
import {ShowLoader,HideLoader} from './../sub-component/Loader'
import {HideAlert, ShowAlert} from './../sub-component/Alert'

const Profile=({data})=>{
    if(data===null){
        window.location.href='/';
    }
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
    //UploadImage();
}
const UploadImage=()=>{
    ShowLoader();
    const file=document.getElementById('file').files[0];
    const ref=firebaseApp.storage().ref();
    const name=file.name;
    const uploadTask=ref.child('profile/'+name).put(file);
    uploadTask.on('state_changed',
  (snapshot) => {
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //HideLoader();
    //ShowAlert('Uploading..','Upload is '+progress+' % done.');
  }, 
  (error) => {
    // Handle unsuccessful uploads
    ShowAlert('Faild!','There has a problem to upload image.');
  }, 
  () => {
    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
      document.getElementById('pr0').src=downloadURL;
      const db=firebaseApp.firestore();
      db.collection('user').doc(data.id).update({
          img: downloadURL
      }).then(function(){
        HideLoader();
        console.log('File available at', downloadURL);
        ShowAlert('Successfull!','Image uploaded successfull');
      });
    });
  }
);

}

    return(
        <div className='profilee'>
          <div className='p-box0'>
             <input type='file' className='file' id='file' name='files[]' onChange={UploadImage}>
             </input>
             <div className='p-img' onClick={OpenFile}>
             <img src={data.img} alt='pr' id='pr0'></img>
             </div>
             <div className='p-box1'>
              <BiRename></BiRename><input type="text" placeholder={data.name} style={{fontSize:'20px'}} id='name' /><br></br>
             <AiOutlinePhone></AiOutlinePhone><input type="text" id='phone' placeholder={data.phone} style={{fontSize:'17px'}}/>
             </div>
         </div>
             <h4>Other Information</h4>
             <div className='p-box0'>
                <div className='p-box1' style={{width:'90%', display: 'flex'}}>
                    <p>Address: </p>
                <input type='text' id='address' placeholder={data.address} style={{ fontSize:'16px'}}></input>
                </div>
                <div className='p-box1' style={{width:'90%', display: 'flex'}}>
                    <button onClick={SaveData}>Save Changes</button>
                </div>
             </div>
        </div>
    )
}
export default Profile;