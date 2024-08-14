import { Buttons } from "../Buttons/Buttons";
import "./navBar.css";

export const NavBar = () => {
    return (
        <nav className="nav_bar">
            <ul>
                <li>
                    <a href="#" target="_blank" className="underline_anim">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank" className="underline_anim">
                        Handmade
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank" className="underline_anim">
                        Workshops
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank" className="underline_anim">
                        Contact Us
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank" className="underline_anim">
                        Testimonial
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank" className="underline_anim">
                        FAQ
                    </a>
                </li>
            </ul>
            <Buttons />
        </nav>
    );
};
