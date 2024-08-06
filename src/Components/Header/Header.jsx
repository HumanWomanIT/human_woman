import './header.css';
import logo from '../../assets/Round.png'
import { NavBar } from '../NavBar/NavBar'



export const Header = () => {
    return(
        <header className="header_wrapper">
            <img src={logo} alt="" />
            <NavBar/>
        </header>
    )
}