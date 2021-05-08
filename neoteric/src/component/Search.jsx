import React,{useState} from 'react'
import { FaSearch } from "react-icons/fa";
import './search.css'

function Search(props){
    const [data,setData]=useState(null);
    const Focus=(p)=>{
        document.getElementById(props.id).style.display='flex';
        //document.getElementById('box').classList.add('s');
    }
    const Up=(e)=>{
        setData(props.posts);
        console.log(props.posts);
    }
    return(
        <div className="search-box">
            <input type="text" placeholder="Search..." onFocus={Focus.bind(this,'visiable')} onKeyUp={e=>Up(e)}></input>
            <FaSearch className="search-btn"></FaSearch>
            <div className='search-box1' id={props.id}>
                {
                   data.map((d)=>(
                    Nav(d)
                ))
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