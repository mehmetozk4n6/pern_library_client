import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

function Add_nav() {
  return (
    <div>
      <Link to="/">
        <BsArrowLeft />
        Return to List Page
      </Link>
    </div>
  );
}

export default Add_nav;
