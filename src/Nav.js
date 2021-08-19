
import './style.css'
import Logo from './logo.png'
import React, {useRef, useState} from 'react'
import PanelLeft from './PanelLeft'

import PanelRight from './PanelRight'
export default function Nav() {

   const [nav_tips, loadTips] = useState([]);

    const search_data = useRef();
    function search(e){
        e.preventDefault();
        console.log(search_data.current.value)
        
        fetch('/search_requests', {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors',
          body: JSON.stringify({search_handle:search_data.current.value}),
          // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          // body data type must match "Content-Type" header
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            console.log(Object.keys(data).length)
      for(let i=0;i<=Object.keys(data).length-1;i++){
        var tip = data[i]
        
      loadTips(previousTips => 
        [...previousTips, {name:tip.name, group:tip.group, tip:tip.tip, personal_url:tip.personal_url, tip_id:tip.tip_id, likes:tip.likes}]
      )
      }
          })
    }
    return (
     <> 
            <div className="card">
            <div className = 'row'>
             <div className="col">   
			<img src={Logo} alt = "Logo"/>
            </div>
			<div className="col">
			<form>
				
				<input type="text" ref={search_data} name="search" id="search"  placeholder="search any handle" style={{"marginTop": "14px", "marginBottom":"5px"}}></input>
				<input type="submit" id="searchbtn" value="Search" style={{backgroundColor:"#00acee"}} onClick={search} ></input>
			</form>
          </div>      
       
            </div>
            </div>
      <PanelLeft tips={nav_tips} />
    </>    
    )
}
