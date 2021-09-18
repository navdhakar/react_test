import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import PanelRight from "./PanelRight";
import Nav from "./Nav";
import PanelLeft from "./PanelLeft";
import "./style.css";
const server =
  process.env.NODE_ENV == "production"
    ? "https://tipsterserver.herokuapp.com/"
    : "http://127.0.0.1:8000";

export default function App() {
  const [tips, loadTips] = useState([]);
  /*const [state, setstate] = useState([])
   const [page, setPage] = useState(PAGE_NUMBER)*/
  const [home, changehome] = useState(["#00acee"]);
  const [trending, changetrending] = useState(["#000000"]);
  useEffect(() => {
    fetch(`${server}/home_page`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors",
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
        loadTips([]);
        const tips_data = {};
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
  }, []);
  //for implementing infinte scroll
  /*const scrollToEnd = () => {
      setPage(page+1)
    }

    window.onscroll = function(){

      if(
        window.innerHeight + document.documentElement.scrollTop
        === document.documentElement.offsetHeight

      ){
        scrollToEnd()
      }
    }*/

  function Trending() {
    fetch(`${server}/trending_page`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors",
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
        loadTips([]);
        const tips_data = {};
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
  }

  function Home() {
    fetch(`${server}/home_page`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors",
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
        loadTips([]);
        const tips_data = {};
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
            },
          ]);
        }
      });
  }
  function changeFocus(page) {
    if (page == "home") {
      changehome("#00acee");
      changetrending("#000000");
    }
    if (page == "trending") {
      changehome("#000000");
      changetrending("#00acee");
    }
  }
  return (
    <>
      <div className="row">
        <Nav />
        <div></div>
      </div>

      <div className="row">
        <div className="col-8 left-panel">
          <div className="card" style={{ marginTop: "10px" }}>
            <div className="row">
              <div
                className="col-6"
                id="home_page"
                style={{
                  cursor: "pointer",

                  fontSize: "20px",
                  color: home,
                }}
                onClick={() => {
                  Home();
                  changeFocus("home");
                }}
              >
                Home
              </div>

              <div
                className="col-6"
                id="trending_page"
                style={{
                  cursor: "pointer",

                  fontSize: "20px",
                  color: trending,
                }}
                onClick={() => {
                  Trending();
                  changeFocus("trending");
                }}
              >
                Trending
              </div>
            </div>

            <hr></hr>
            <div className="row">
              <PanelLeft tips={tips} />
            </div>
          </div>
        </div>

        <div className="col-4 right-panel">
          <button
            className="btn btn-primary"
            style={{
              backgroundColor: "#00acee",
              border: "0px",
              position: "fixed",
            }}
            onClick={Home}
          >
            Load more
          </button>

          <div className="col right-panel" style={{ marginTop: "30px" }}>
            {" "}
            <PanelRight />
          </div>
        </div>
      </div>

      <div className="row">
        <Footer />
      </div>
    </>
  );
}
