import React from "react";
import './footer.css';
import logoImg from '../../assets/Round.png'

export const Footer = () => {
    return (
        <footer className="footer_wrapper">
            <div>
                <img src={logoImg} alt="" />
            </div>
        </footer>
    )
}