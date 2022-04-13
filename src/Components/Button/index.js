import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Button({link, content}) {
    return(
      <Link to={link} className="button">{content}</Link>
    );
}