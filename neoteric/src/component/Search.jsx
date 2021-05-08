import React,{useState,useEffect} from 'react'
import { FaSearch } from "react-icons/fa";
import './search.css'

function Search(props){
    const [data,setData]=useState(null);
    const Focus=(p)=>{
        document.getElementById(props.id).style.display='flex';
        //document.getElementById('box').classList.add('s');
    }
    const Up=(e)=>{
        var val=e.target.value;
        var all=[];
        var n=0;
        for(var i=0;i<props.posts.length;i++){
            for(var j=0;j<val.length;j++){
                for(var k=j;k<props.posts[i].name.length;k++){
                    if(props.posts[i].name[j]===val[j]){
                        all[n]=props.posts[i];
                        n++;
                    }else if(props.posts[i].name[k-1]===' '){
                        if(props.posts[i].name[k]===val[j]){
                            all[n]=props.posts[i];
                            n++;
                        }
                    }
                }
            }
        }
        setData(all);
    }
    useEffect(() => {
        setData(props.posts);
    }, [])
    return(
        <div className="search-box">
            <input type="text" placeholder="Search..." onFocus={Focus.bind(this,'visiable')} onKeyUp={e=>Up(e)}></input>
            <FaSearch className="search-btn"></FaSearch>
            <div className='search-box1' id={props.id}>
                {
                  data!=null?(
                    data.map((d)=>(
                        Nav(d)
                    ))
                  ):(
                      <p>h</p>
                  )
                }
            </div>
        </div>
    );
}
export default Search;

function Nav(props){

    return(
        <div className='se-bx'>
            <img src={props.img} alt={props.name}></img>
            <p>{props.name}</p>
        </div>
    )
}