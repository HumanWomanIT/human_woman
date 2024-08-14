import './homePageOne.css';
import pattern from '../../assets/pattern.png'

export const HomePageOne = () => {
    return(
        <section className='homepage_first'>
            <div className='text_container container'>
                <h1>Here You can find Items handmade by rural women</h1>
                <p>Crafting Tomorrow, One Handicraft at a Time</p>
                <button>See more</button>
            </div>
            <div>
                <img src={pattern} alt="" className='spinning_image'/>
            </div>
        </section>
    )
}