import React, {useState, useEffect} from 'react'

import PanelRight from './PanelRight'
import Nav from './Nav'
import PanelLeft from './PanelLeft'
import './style.css'
export default function App() {
    
   const [tips, loadTips] = useState([
     
   ]) 
    useEffect(()=>{

    fetch('/home_page', {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors',
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
      .then((data)=>{
  
      const tips_data = {}
      for(let i=0;i<=Object.keys(data).length-1;i++){
        var tip = data[i]
        
      loadTips(previousTips => 
        [...previousTips, {name:tip.name, group:tip.group, tip:tip.tip, personal_url:tip.personal_url, tip_id:tip.tip_id, likes:tip.likes}]
      )
      }
               
     
      }
      )

    }, [])
    return (

        
    <>
    <div className = "row">
    < Nav/>
    </div>
    <div className="row">
    <div className = "col">
    <div className="card" style={{ "marginTop":"10px"}}>   
	<div className="row">
	<div className="col-sm" id="home_page" style={{"cursor":"pointer", "float":"right"}}>Home</div>
					
	<div className="col-sm" id="trending_page" style={{"cursor":"pointer", "float":"left"}} >Trending</div>
    <hr style={{"width":"99%"}}></hr>
    </div>
    <div className="row">
    <PanelLeft tips={tips}/>
    </div>			
    </div>
    </div>
      <div className="col">  
    <div className = "col" style={{"marginRight":"-30%"}}> <PanelRight /></div>
    </div>
    </div>    
    </>
    )
}
