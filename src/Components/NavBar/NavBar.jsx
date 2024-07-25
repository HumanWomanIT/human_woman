import { SocialMedia } from "../SocialMedia/SocialMedia";
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
                        Remote Jobs
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank" className="underline_anim">
                        Workshops
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank" className="underline_anim">
                        About Us
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank" className="underline_anim">
                        Contact
                    </a>
                </li>
                <span></span>
            </ul>
            <SocialMedia/>
        </nav>
    );
};
