import React,{useState,useEffect} from 'react'
import { FaSearch } from "react-icons/fa";
import './search.css'



function Search(props){
    const [data,setData]=useState(null);
    const Focus=(p)=>{
        document.getElementById(props.id).style.display=p;
        //document.getElementById('box').classList.add('s');
    }
    const Click=(d)=>{
        Focus('none');
        props.changePost(d);
    }
    const Up=(e)=>{
        let val=e.target.value;
        let all=[];
        var n=0;
        if(props.posts){
            all=props.posts.filter((data)=>{
                return data.name.toLocaleLowerCase().startsWith(val.toLocaleLowerCase());
            })
        }
        setData(all);
    }
    
    return(
        <div className="search-box" onMouseLeave={Focus.bind(this,'none')}>
            <input type="text" placeholder="Search..." onMouseOver={Focus.bind(this,'flex')} onKeyUp={e=>Up(e)} ></input>
            <FaSearch className="search-btn"></FaSearch>
            <div className='search-box1' id={props.id}>
                {
                  data!=null?(
                    data.map((d)=>(
                        <Nav data={d} Click={d=>Click(d)}></Nav>
                    ))
                  ):(
                      <p></p>
                  )
                }
            </div>
        </div>
    );
}
export default Search;

function Nav(props){

    return(
        <div className='se-bx' onClick={props.Click.bind(this,props.data)}>
            <img src={props.data.img} alt={props.data.name}></img>
            <p>{props.data.name}</p>
        </div>
    )
}