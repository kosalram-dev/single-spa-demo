import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

export default function Root(props) {
  return (
    <>
      <section>{props.name} is mounted!</section>
      {/* <Link to='/app1'>Navigate</Link> */}
      <BrowserRouter>
        <nav className="nav">
          <Link to="/app1">
            App 1
          </Link>
          <Link to="/page2">
            Page 2
          </Link>
        </nav>
      </BrowserRouter>
    </>
  );
}
