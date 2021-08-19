import React, {useState} from 'react'
import './style.css'
import pyhton from './python.jpg'
import js from './js.png'
export default function Tiptemplate({tip}) {

const [like, like_counter] = useState(tip.likes)
const [color, change_color] = useState([])
const [isClick, setClick] = useState(false);

function like_changer(props){
    const status = props
    console.log(status)
    if(status){
        like_counter(like-1);
        console.log("liked removed")
            const like_data = {
              tip_id:tip.tip_id,
              like:'dec'
              }

            fetch('/like_counter', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors',
            body: JSON.stringify(like_data),
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

            });
    }
    else{

        like_counter(like+1);
    
           console.log("liked")
           const like_data = {
              tip_id:tip.tip_id,
              like:'inc'
              }

            fetch('/like_counter', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors',
            body: JSON.stringify(like_data),
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

            });
    }
}
function Avatar(language){
    
if(language.language=="Python"){

    return  <img className="avatar" src={pyhton} alt="user" style={{width:"40px", height:"40px", borderRadius:"20px"}}/>
}
if(language.language=="Javascript"){

    return <img className="avatar" src={js} alt="user" style={{width:"40px", height:"40px", borderRadius:"20px"}}/>
}
else {

    return <img className="avatar" src={js} alt="user" style={{width:"40px", height:"40px", borderRadius:"20px"}}/>
}
}

const changeColour = isClick ? "#e01425" : "grey"
    return (
        <div className="Tipswrapper">
            <Avatar language={tip.group}/>
            <span className="name" style={{color:"#00acee", fontWeight:"bold", }}>{tip.group}</span>
            <span className="name">@{tip.name}</span>
            <p className="tip">{tip.tip}</p>
            <a href={tip.personal_url}>{tip.personal_url}</a>
           
            < div className="col-sm-11" > 
            <i class="fas fa-heart" isClick={isClick} onClick={() => {setClick(!isClick);
                like_changer(isClick);

                }} style={{color:changeColour, cursor:"pointer"}}>{like}</i>
                
            </div>    
            <hr></hr>
        </div>
        
    )
}
