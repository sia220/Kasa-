import logo from '../assets/logo.png'
import '../styles/footer.scss'
function Footer(){
    return (
        <footer className='footer'>
            <img src={logo} className='footer--logo'></img>
            <p className='footer--texte'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer