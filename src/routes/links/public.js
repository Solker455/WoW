import React from "react";
import { Link } from "react-router-dom";

export function PublicLink() {
    return (
        <ul className="menu">
            <li className="link"><Link className="link-item" to="/">Главная</Link></li>
        </ul>
    )
}
