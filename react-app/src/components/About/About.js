
import './About.css'

import Adam from './93167520.jpg'
import Alex from './108106312.jpg'
import Shibo from './79328810.jpg'

export default function About() {



    return (

    <div className='about-container'>

    <div className='profile-container-about'>
        <img src={Adam} alt="Adam" />
        <h3>Adam Bonkowski</h3>
        <p className='links button-55' onClick={() => window.open('https://github.com/Met8919')}>GitHub</p>
        <p className='links button-55' onClick={() => window.open('https://www.linkedin.com/in/adam-bonkowski-7165a2105/')}>Linkedin</p>

    </div>

    <div className='profile-container-about'>
    <img src={Shibo} alt="Shibo" />
    <h3>Shibo Hu</h3>
    <p className='links button-55' onClick={() => window.open('https://github.com/ShiboHu')}>GitHub</p>
    <p className='links button-55' onClick={() => window.open('https://www.linkedin.com/in/shibo-hu-b4712323a/')}>Linkedin</p>

    </div>

    <div className='profile-container-about'>
    <img src={Alex} alt="Alex" />
    <h3>Alexis Rafael</h3>
    <p className='links button-55' onClick={() => window.open('https://github.com/alex-rafael-13')}>GitHub</p>
    <p className='links button-55' onClick={() => window.open('https://www.linkedin.com/in/alexis-rafael-319092275/')}>Linkedin</p>

    </div>

    

    </div>

    )


}