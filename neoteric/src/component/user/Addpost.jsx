import { Button, TextField } from '@material-ui/core';
import React,{useState,useEffect} from 'react';
import './styles.css';
import {uuid} from 'uuidv4';
import { HideLoader, ShowLoader } from '../sub-component/Loader';
import firebaseApp from './../../firebase'
import { ShowAlert } from '../sub-component/Alert';

const Addpost = (props) => {
    const [color,setColor]=useState([]);
    const [size,setSize]=useState([]);
    const [logo,setLogo]=useState(null);
    const [images,setImages]=useState([]);

    const SetColor=(d)=>{
       setColor([...color,d]);
    }
    const SetSize=(d)=>{
        setSize([...size,d]);
    }
    const Update=()=>{
        let name=document.getElementById('name');
        let prize=document.getElementById('prize');
        let type=document.getElementById('type');
        let des=document.getElementById('des');
        if(name.value===''|| prize.value===''|| type.value===''|| des.value===''|| logo==null){
            ShowAlert('Wrong!','Please fill all the inputs.');
            return;
        }
        ShowLoader();
        let db=firebaseApp.firestore();
        let id=uuid();
        db.collection('post').doc(id).set({
            id: id,
            img: logo,
            images: images,
            color: color,
            size: size,
            name: name.value,
            prize: parseInt(prize.value),
            type: type.value,
            description: des.value,
            date: new Date(),
            view: 0,
            uid: props.user.id
        }).then(()=>{
            HideLoader();
            ShowAlert('Successfull!','Product uploaded successfull.');
            name='';
            des='';
            setImages([]);
            setColor([]);
            setSize([]);
            setLogo(null);
        });
    }




    const UploadImage=(d)=>{
        ShowLoader();
        const file=document.getElementById(d).files[0];
        const ref=firebaseApp.storage().ref();
        const name=file.name;
        const uploadTask=ref.child('post/'+name).put(file);
        uploadTask.on('state_changed',
      (snapshot) => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        HideLoader();
        ShowAlert('Uploading..','Uploading is '+progress+'% done.');
      }, 
      (error) => {
        ShowAlert('Faild!','There has a problem to upload image.');
      }, 
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          if(d==='logo'){
              setLogo(downloadURL);
              ShowAlert('Successfull!','Upload is complete.');
          }else{
            setImages([...images,downloadURL]);
            ShowAlert('Successfull!','Upload is complete.');
          }
        });
      }
    );
    
    }
    return (
        <div className='add-post'>
            <h4>Add Post</h4>
            <p>Flow the instruction carefully and fill all the blanks.</p>
            <div className='add-post1'>
                <label>Product Name: (less then 160 letter)</label>
                <input type='text' placeholder='Product Name' id='name'></input>
                <label>Product Prize:</label>
                <input type='number' placeholder='Product Prize' id='prize'></input>
                <label>Select product type:</label>
                <select id='type'>
                    {
                        props.admin!=null?(
                            props.admin.collections.map((d)=>(
                                <option value={d}>{d}</option>
                            ))
                        ):(
                            <option value='null'>Nothing</option>
                        )
                    }
                </select>
                <label>Add product color:(input must be lowercase without space)</label>
                <div className='color1'>
                    {
                        color.map((d)=>(
                            <span style={{background:d}}></span>
                        ))
                    }
                </div>
                <ButtonInput function={d=>SetColor(d)} id='sss'></ButtonInput>
                <label>Add product size:</label>
                <div className='color2'>
                    {
                        size.map((d)=>(
                            <span>{d}</span>
                        ))
                    }
                </div>
                <ButtonInput function={d=>SetSize(d)} id='zzz'></ButtonInput>
                <label>Product logo:(use 400*400px background removal)</label>
                <input type='file' id='logo' onChange={UploadImage.bind(this,'logo')}></input>
                <label>Secondary Images:(squire size with background)</label>
                <input type='file' id='img1' onChange={UploadImage.bind(this,'img1')}></input>
                <input type='file' id='img2' onChange={UploadImage.bind(this,'img2')}></input>
                <input type='file' id='img3' onChange={UploadImage.bind(this,'img3')}></input>
                <input type='file' id='img4' onChange={UploadImage.bind(this,'img4')}></input>
                <input type='file' id='img5' onChange={UploadImage.bind(this,'img5')}></input>
                <label>Product Description:</label>
                <textarea type='text' placeholder='Add description here....' id='des'></textarea>
                <div style={{margin:'10px 10%',width:'80%'}}>
                <Button variant="contained" color="primary" className='add-post-btn' onClick={Update}>Update</Button>
                </div>
            </div>
        </div>
    );
};

export default Addpost;

const ButtonInput=(props)=>{
    const Exe=()=>{
        let a=document.getElementById(props.id).value;
        props.function(a);
    }
    
    return(
        <div style={{width:'80%',height:'fit-content',display: 'flex',marginLeft:'10%'}}>
            <input type='text' placeholder='Place input' style={{marginLeft:'0',marginRight:'5px'}} id={props.id}></input>
            <Button variant="contained" color="primary" style={{marginLeft:'10px'}} onClick={Exe}>Add</Button>
        </div>
    )
}