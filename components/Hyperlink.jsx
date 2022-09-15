import React, { useState } from "react";

export default function Hyperlink(props) {
  const outerLink = {
    color: "#353839",
  };

  const outerLinkHover = {
    color: "tomato",
    //transition: "0.2s",
  };

  const [isHover, setHover] = useState(false);

  return (
    <div>
      <a
        style={isHover ? outerLinkHover : outerLink}
        href={props.link}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {props.content}
      </a>
    </div>
  );
}
