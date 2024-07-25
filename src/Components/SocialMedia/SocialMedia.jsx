import './socialMedia.css';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/Instagram.png';


export const SocialMedia = () => {
    return(
        <div className="social_media">
            <a href="">
                <img src={facebook} alt="" />
            </a>
            <a href="">
                <img src={instagram} alt="" />
            </a>
        </div>
    )
}