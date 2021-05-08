import React,{useState,useEffect} from 'react';
import './collection.css'
import './../loader.css'
import Card from './sub-component/Card';
import {Click} from './../App'
import { Button } from '@material-ui/core';

const Collection = (props) => {
    const [n,set]=useState(10);
    const [select,setSelect]=useState('T Shirt');
    const [post,setPosts]=useState(null);
    //console.log(props.posts);

    const setPost=(p)=>{
        props.changePost(p);
        Click('view');
 
    }
    useEffect(() => {
        var e=[];
        if(props.data===null){
            for(var k=0;k<props.posts.length;k++){
                e[k]=props.posts[k];
               // if(k===16){
                   // break;
               // }
            }
        }else{
            for(var l=0;l<props.posts.length;l++){
                if(props.posts[l].type===props.data){
                    e[l]=props.posts[l];
                }
                //if(j===q){
                   //break;
               // }
            }
        }
        setPosts(e);
    }, [props.data])
       const GetPost=(q)=>{
        var p=document.getElementById('select');
        var a=[];
        var j=0;
        for(var i=0;i<props.posts.length;i++){
            if(props.posts[i].type===p.value){
                a[j]=props.posts[i];
                j++;
            }
            //if(j===q){
               //break;
           // }
        }
        setPosts(a);
        //console.log(post);
        //document.getElementById('button').style.display='initial';
       }
        
    return (
        <div className='collection'>
            <h4>COLLECTIONS : </h4>
            <select  id='select' onChange={GetPost.bind(this,16)}>
            <option>No option</option>
                {
                    props.admin!=null?(
                            props.admin.collections.map((a,i)=>(
                                <option value={a}>{a}</option>
                            ))
                    ):
                    (
                        <option>No option</option>
                    )
                }
            </select>
             {
                    post!=null?(
                        <div className='c11'>
                           {
                               post.map((d,i)=>(
                                <Card data={d} changePost={post=>setPost(post)}></Card>
                               )       
                               )
                           }
                        </div>
                    ):
                    (
                        <div className='c11'>
                           <p>No data avaible</p>
                        </div>
                    )
                }
            <Button variant="outlined" color="primary" id='button' onClick={GetPost.bind(this,32)}>Load More</Button>
        </div>
    );
};

export default Collection;