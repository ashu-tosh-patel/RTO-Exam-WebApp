import { NavLink } from 'react-router-dom'
import Logo from './Logo'
// import Avatar from './Avatar'
// import { useAuthContext } from '../hooks/useAuthContext'

//styles & images
import './Sidebar.css'
// import DashboardIcon from '../assets/logorto.png'
import Icon from '../assets/logorto.png'
import Home from '../assets/home.png'
import Que from '../assets/questions.png'
import Signal from '../assets/signal.png'
import Test from '../assets/test.png'

export default function Sidebar() {

    return (
        <div className="sidebar">
            <div className="sidebar-content">
                <div className="user">
                    <Logo src={Icon} />
                    <p>नमस्कार</p>
                </div>
                <nav className="links">
                    <ul>
                        <li>
                            <NavLink exact to="/">
                                <img src={Home} alt="dashboard icon" />
                                <span>होम</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/questions">
                                <img src={Que} alt="add project icon" />
                                <span>सभी प्रश्न</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/signals">
                                <img src={Signal} alt="add project icon" />
                                <span>यातायात सिग्नल</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/tests">
                                <img src={Test} alt="add project icon" />
                                <span>परीक्षण</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    )
}

