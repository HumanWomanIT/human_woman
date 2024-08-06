import './register.css';
import illustration from '../../assets/Illustration.png'

export const RegisterSection = () => {
    return(
        <section className='regiter_section'>
            <div className='text_container container'>
                <h1>Here You can find your remote jobs</h1>
                <p>Where to grow your business as a photographer: site or social media?</p>
                <button>Register</button>
            </div>
            <div>
                <img src={illustration} alt="" />
            </div>
        </section>
    )
}