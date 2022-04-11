import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Button({content}) {
    return(
        <div className="button">
            <Link to="/"><a href="">{content}</a></Link>
        </div>
    );
}