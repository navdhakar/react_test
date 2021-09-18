import "./style.css";
import Logo from "./logo.png";
import React, { useRef, useState } from "react";
import PanelLeft from "./PanelLeft";

import PanelRight from "./PanelRight";
const server = process.env.NODE_ENV == "production" ? "https://tipsterserver.herokuapp.com/" : "http://127.0.0.1:8000";

export default function Nav() {
  const [nav_tips, loadTips] = useState([]);
  const [search_handler, search_changer] = useState(["Search"]);

  const search_data = useRef();
  function updatepageview(pagetype) {
    const data = {
      page: pagetype,
    };
    fetch(`${server}/update_page_view`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors",
      body: JSON.stringify(data),
      // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // body data type must match "Content-Type" header
    });
  }
  const search = (event) => {
    if (search_handler == "Search") {
      search_changer("Clear");

      fetch(`${server}/search_requests`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors",
        body: JSON.stringify({ search_handle: search_data.current.value }),
        // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        // body data type must match "Content-Type" header
      })
        .then((res) => res.json())
        .then((data) => {
          for (let i = 0; i <= Object.keys(data).length - 1; i++) {
            var tip = data[i];

            loadTips((previousTips) => [
              ...previousTips,
              {
                name: tip.name,
                group: tip.group,
                tip: tip.tip,
                personal_url: tip.personal_url,
                code: tip.code,
                tip_id: tip.tip_id,
                likes: tip.likes,
                tip_dom_id: tip.tip_dom_id,
              },
            ]);
          }
        });
    } else {
      search_changer("Search");
      loadTips([]);
    }
    event.preventDefault();
  };
  return (
    <>
      <div className="card">
        <div className="row">
          <div className="col-4">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="col-8">
            <form>
              <input
                type="text"
                ref={search_data}
                name="search"
                id="search"
                placeholder="search any handle or language(Javascript,Python,CSS,Java,C,C++ )"
                style={{ marginTop: "14px", marginBottom: "5px", width: "60%" }}
              ></input>
              <input type="submit" id="searchbtn" value={search_handler} style={{ backgroundColor: "#00acee" }} onClick={search}></input>
            </form>
          </div>
        </div>
      </div>
      <div className="card">
        <PanelLeft tips={nav_tips} />
      </div>
    </>
  );
}
