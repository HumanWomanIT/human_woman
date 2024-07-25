import { SocialMedia } from "../SocialMedia/SocialMedia";
import "./navBar.css";

export const NavBar = () => {
    return (
        <nav className="nav_bar">
            <ul>
                <li>
                    <a href="#" target="_blank">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank">
                        Remote Jobs
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank">
                        Workshops
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank">
                        About Us
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank">
                        Contact
                    </a>
                </li>
                <span></span>
            </ul>
            <SocialMedia/>
        </nav>
    );
};
