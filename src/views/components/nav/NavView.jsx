import React from 'react';
import PropTypes from 'prop-types';
import './Nav.scss';

const NavView = props => {
    return (
        <div className={"navbar"}>

            <h1 className={"top-left-heading"}>Paul Website</h1>

            <div className={"links"}>
                <a href={"#"}>Home</a>
                <a href={"#"}>About me</a>
                <a href={"#"}>Certs</a>
                <a href={"#"}>Codepen</a>
                <a href={"#"}>Contact</a>
            </div>
            <div className={"social"}>
                <a href={"#"}>IG</a>
                <a href={"#"}>Twitter</a>
                <a href={"#"}>FB</a>
            </div>

        </div>
    );
};

NavView.propTypes = {

};

export default NavView;
