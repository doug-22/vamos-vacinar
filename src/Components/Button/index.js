import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Button({link, content}) {
    return(
        <div className="button">
            <Link to={link}>{content}</Link>
        </div>
    );
}