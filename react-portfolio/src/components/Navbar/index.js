import './index.scss' 
import {Link} from 'react-router-dom'


//import LogoS from '../../assets/Images/logo.png'

const Navbar = () => (
    <div className='nav-bar'>
        <Link className='logo' to="/">
            <h1>Pawan Harikrishnan</h1>
        </Link>
    </div>
)

export default Navbar