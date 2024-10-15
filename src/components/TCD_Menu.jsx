import { Link } from "react-router-dom";
import React from "react";
import "../css/TCD_Menu.css";

const TCD_Menu = React.memo(() => {
    return (
        <div className="TCD-container">
            <Link to='/BigBang'>
                <img src="/assets/images/TCD_menu/image01.webp" alt="Big Bang" title="Big Bang" />
            </Link>

            <Link to='/EoE'>
                <img src="/assets/images/TCD_menu/image02.webp" alt="Evolution of Earth" title="Evolution of Earth" />
            </Link>

            <Link to='/Planets'>
                <img src="/assets/images/TCD_menu/image03.webp" alt="Planets" title="Planets" />
            </Link>

            <Link to='/Constellation'>
                <img src="/assets/images/TCD_menu/image04.webp" alt="Constellation" title="Constellation" />
            </Link>

            <Link to='/Comets'>
                <img src="/assets/images/TCD_menu/image05.webp" alt="Comets" title="Comets" />
            </Link>
        </div>
    );
});

export default TCD_Menu;
