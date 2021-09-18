import React, { useState } from "react";
import "./style.css";
import python from "./python.jpg";
import js from "./js.png";
import java from "./java.png";
import c_lang from "./C_lang.png";
import cpp_lang from "./cpp_lang.png";
import html from "./html.png";
import css from "./css.png";
import other from "./else.png";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
const server =
  process.env.NODE_ENV == "production"
    ? "https://tipsterserver.herokuapp.com/"
    : "http://127.0.0.1:8000";

export default function Tiptemplate({ tip }) {
  const [like, like_counter] = useState(tip.likes);
  const [isClick, setClick] = useState(false);

  function like_changer(props) {
    const status = props;
    console.log(status);
    if (status) {
      like_counter(like - 1);
      console.log("liked removed");
      const like_data = {
        tip_id: tip.tip_id,
        like: "dec",
      };

      fetch(`${server}/like_counter`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors",
        body: JSON.stringify(like_data),
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
          console.log(data);
        });
    } else {
      like_counter(like + 1);

      console.log("liked");
      const like_data = {
        tip_id: tip.tip_id,
        like: "inc",
      };

      fetch(`${server}/like_counter`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors",
        body: JSON.stringify(like_data),
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
          console.log(data);
        });
    }
  }
  function Code(code) {
    if (tip.group == "Python") {
      return (
        <SyntaxHighlighter
          language="python"
          style={docco}
          lineProps={{
            style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
          }}
          wrapLines={true}
        >
          {code.code}
        </SyntaxHighlighter>
      );
    }

    if (tip.group == "Javascript") {
      return (
        <SyntaxHighlighter
          language="javascript"
          style={docco}
          lineProps={{
            style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
          }}
          wrapLines={true}
        >
          {code.code}
        </SyntaxHighlighter>
      );
    }

    if (tip.group == "Java") {
      return (
        <SyntaxHighlighter
          language="java"
          style={docco}
          lineProps={{
            style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
          }}
          wrapLines={true}
        >
          {code.code}
        </SyntaxHighlighter>
      );
    }
    if (tip.group == "C") {
      return (
        <SyntaxHighlighter
          language="c"
          style={docco}
          lineProps={{
            style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
          }}
          wrapLines={true}
        >
          {code.code}
        </SyntaxHighlighter>
      );
    }

    if (tip.group == "C++") {
      return (
        <SyntaxHighlighter
          language="cpp"
          style={docco}
          lineProps={{
            style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
          }}
          wrapLines={true}
        >
          {code.code}
        </SyntaxHighlighter>
      );
    }

    if (tip.group == "HTML") {
      return (
        <SyntaxHighlighter
          language="html"
          style={docco}
          lineProps={{
            style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
          }}
          wrapLines={true}
        >
          {code.code}
        </SyntaxHighlighter>
      );
    }
    if (tip.group == "CSS") {
      return (
        <SyntaxHighlighter
          language="css"
          style={docco}
          lineProps={{
            style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
          }}
          wrapLines={true}
        >
          {code.code}
        </SyntaxHighlighter>
      );
    } else {
      return (
        <SyntaxHighlighter
          style={docco}
          lineProps={{
            style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
          }}
          wrapLines={true}
        >
          {code.code}
        </SyntaxHighlighter>
      );
    }
  }
  function Avatar(language) {
    if (language.language == "Python") {
      return (
        <img
          className="avatar"
          src={python}
          alt="user"
          style={{ width: "40px", height: "40px", borderRadius: "20px" }}
        />
      );
    }
    if (language.language == "Javascript") {
      return (
        <img
          className="avatar"
          src={js}
          alt="user"
          style={{ width: "40px", height: "40px", borderRadius: "20px" }}
        />
      );
    }

    if (language.language == "Java") {
      return (
        <img
          className="avatar"
          src={java}
          alt="user"
          style={{ width: "40px", height: "40px", borderRadius: "20px" }}
        />
      );
    }

    if (language.language == "C") {
      return (
        <img
          className="avatar"
          src={c_lang}
          alt="user"
          style={{ width: "40px", height: "40px", borderRadius: "20px" }}
        />
      );
    }

    if (language.language == "C++") {
      return (
        <img
          className="avatar"
          src={cpp_lang}
          alt="user"
          style={{ width: "40px", height: "40px", borderRadius: "20px" }}
        />
      );
    }

    if (language.language == "HTML") {
      return (
        <img
          className="avatar"
          src={html}
          alt="user"
          style={{ width: "40px", height: "40px", borderRadius: "20px" }}
        />
      );
    }

    if (language.language == "css") {
      return (
        <img
          className="avatar"
          src={css}
          alt="user"
          style={{ width: "40px", height: "40px", borderRadius: "20px" }}
        />
      );
    } else {
      return (
        <img
          className="avatar"
          src={other}
          alt="user"
          style={{ width: "40px", height: "40px", borderRadius: "20px" }}
        />
      );
    }
  }

  const changeColour = isClick ? "#e01425" : "grey";
  return (
    <div className="Tipswrapper">
      <Avatar language={tip.group} />
      <span className="name" style={{ color: "#00acee", fontWeight: "bold" }}>
        {tip.group}
      </span>
      <span className="name">@{tip.name}</span>
      <p className="tip">{tip.tip}</p>

      <Code code={tip.code} />
      <a href={tip.personal_url}>{tip.personal_url}</a>
      <div className="col-sm-11">
        <i
          className="fas fa-heart"
          onClick={() => {
            setClick(!isClick);
            like_changer(isClick);
          }}
          style={{ color: changeColour, cursor: "pointer" }}
        >
          {like}
        </i>
      </div>
      <hr></hr>
    </div>
  );
}
