import "./style.css";
import React, { useRef, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const server = process.env.NODE_ENV == "production" ? "https://tipsterserver.herokuapp.com/" : "http://127.0.0.1:8000";
export default function PanelRight() {
  const [codestate, changestate] = useState(false);
  const nameRef = useRef();
  const handleRef = useRef();
  const tipRef = useRef();
  const groupRef = useRef();
  const CodeRef = useRef();

  function Addcode(addstate) {
    if (addstate.addstate == true) {
      return <textarea ref={CodeRef} className="tipText" type="code" name="tipstext" id="tipstext" placeholder="write your code" required></textarea>;
    } else {
      return null;
    }
  }
  function Tip_submit(e) {
    e.preventDefault();
    if (CodeRef.current.value == "" || null) {
      CodeRef.current.value = "undefined";
    }

    const tip_data = {
      tip: tipRef.current.value,
      username: nameRef.current.value,
      personal_url: handleRef.current.value,
      tip_language: groupRef.current.value,
      code: CodeRef.current.value,
      tip_dom_id: uuidv4(),
    };

    fetch(`${server}/proctor_register`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors",
      body: JSON.stringify(tip_data),
      // no-cors, *cors, same-origin
      cache: "no-cache",
      credentials: "same-origin", // *default, no-cache, reload, force-cache, only-if-cached
      // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",

        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // body data type must match "Content-Type" header
    })
      .then((res) => {
        window.location.reload();
        return res.json();
      })
      .then((data) => console.log(data));
  }
  // let key = "tip_data";
  // localStorage.setItem(key, JSON.stringify(tip_data));
  // document.getElementById("myform").reset();
  return (
    <div className="card right-panel" style={{ marginTop: "10px", position: "fixed" }}>
      <h4 style={{ color: "#00acee", marginBottom: "-20px" }}>Create a tip</h4>

      <h5 id="message" style={{ style: "red" }}></h5>
      <hr></hr>
      <div className="row">
        <form id="myform" name="myform">
          <textarea
            ref={tipRef}
            className="tipText"
            type="tip"
            name="tipstext"
            id="tipstext"
            placeholder="write your tip:max word limit 240"
            required
            maxLength="240"
          ></textarea>
          <i className="fas fa-code icon-user" style={{ cursor: "pointer" }} onClick={() => changestate(!codestate)}></i>
          <Addcode addstate={codestate} />
          <label className="choose" style={{ color: "#00acee", fontSize: "20px" }}>
            choose a language:
          </label>
          <select ref={groupRef} id="languages" style={{ border: "1px solid #dddddd" }}>
            <option value="Javascript">Javascript</option>
            <option value="Python">Python</option>
            <option value="C">C</option>

            <option value="C++">C++</option>
            <option value="HTML">HTML</option>

            <option value="CSS">CSS</option>
            <option value="Java">Java</option>
            <option value="Frameworks">frameworks</option>
          </select>
          <input type="inp" name="namehandle" ref={nameRef} className="namehandle" placeholder="name" required></input>
          <input
            type="inp"
            name="urlhandle"
            ref={handleRef}
            className="urlhandle"
            placeholder="handle:handle can be any link related to your social accounts(twitter, facebook, portfolio page)"
            required
          ></input>
          <button className="btn btn-primary" style={{ backgroundColor: "#00acee", border: "0px" }} onClick={Tip_submit}>
            Tip
          </button>
        </form>
      </div>
    </div>
  );
}
