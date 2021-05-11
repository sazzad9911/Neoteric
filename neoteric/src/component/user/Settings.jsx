import { Button } from '@material-ui/core';
import React from 'react';
import { HideAlert, ShowAlert } from '../sub-component/Alert';
import { HideLoader, ShowLoader } from '../sub-component/Loader';
import firebaseApp from './../../firebase';

const Settings = (props) => {


    const UploadImage=(d)=>{
        ShowLoader();
        const file=document.getElementById(d).files[0];
        const ref=firebaseApp.storage().ref();
        const name=file.name;
        const uploadTask=ref.child('banner/'+name).put(file);
        uploadTask.on('state_changed',
      (snapshot) => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //HideLoader();
        //ShowAlert('Uploading..','Upload is '+progress+' % done.');
      }, 
      (error) => {
        // Handle unsuccessful uploads
        ShowAlert('Faild!','There has a problem to upload image.');
      }, 
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          if(d==='file1'){
            let db=firebaseApp.firestore();
            db.collection('admin').doc('banner').update({
                b1: downloadURL
            }).then(function(){
              HideLoader();
              console.log('File available at', downloadURL);
              ShowAlert('Successfull!','Image uploaded successfull');
            });
          }else if(d==='file2'){
            let db=firebaseApp.firestore();
            db.collection('admin').doc('banner').update({
                b2: downloadURL
            }).then(function(){
              HideLoader();
              console.log('File available at', downloadURL);
              ShowAlert('Successfull!','Image uploaded successfull');
            });
          }else if(d==='file3'){
            let db=firebaseApp.firestore();
            db.collection('admin').doc('banner').update({
                b3: downloadURL
            }).then(function(){
              HideLoader();
              console.log('File available at', downloadURL);
              ShowAlert('Successfull!','Image uploaded successfull');
            });
          }else if(d==='file4'){
            let db=firebaseApp.firestore();
            db.collection('admin').doc('banner').update({
                b4: downloadURL
            }).then(function(){
              HideLoader();
              console.log('File available at', downloadURL);
              ShowAlert('Successfull!','Image uploaded successfull');
            });
          }else if(d==='file5'){
            let db=firebaseApp.firestore();
            db.collection('admin').doc('banner').update({
                b5: downloadURL
            }).then(function(){
              HideLoader();
              console.log('File available at', downloadURL);
              ShowAlert('Successfull!','Image uploaded successfull');
            });
          }
        });
      }
    );
    
    }
    return (
        <div className='seller'>
            <h4 style={{width:'100%',textAlign:'center'}}>Set Banner</h4>
            <div className='exx'>
                <p>Upload 1st Banner:</p>
                <input type='file' id='file1' name='files[]' onChange={UploadImage.bind(this,'file1')}></input>
            </div>
            <div className='exx'>
                <p>Upload 2nd Banner:</p>
                <input type='file' id='file2' name='files[]' onChange={UploadImage.bind(this,'file2')}></input>
            </div>
            <div className='exx'>
                <p>Upload 3rd Banner:</p>
                <input type='file' id='file3' name='files[]' onChange={UploadImage.bind(this,'file3')}></input>
            </div>
            <div className='exx'>
                <p>Upload 4rd Banner:</p>
                <input type='file' id='file4' name='files[]' onChange={UploadImage.bind(this,'file4')}></input>
            </div>
            <div className='exx'>
                <p>Upload 5th Banner:</p>
                <input type='file' id='file5' name='files[]' onChange={UploadImage.bind(this,'file5')}></input>
            </div>
        </div>
    );
};

export default Settings;