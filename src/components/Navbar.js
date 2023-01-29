import { Link } from 'react-router-dom'
// import { useLogout } from '../hooks/useLogout'
// import { useAuthContext } from '../hooks/useAuthContext'

//styles & images
import './Navbar.css'
// import Temple from '../assets/temple.svg'


export default function Navbar() {

    return (
        <div className="navbar">
            <ul>
                <li>
                    <a href="https://play.google.com/store/apps/details?id=com.ciberspace.RTOExamHindi" target="_blank"> <button className="btn">हमारे Android ऐप को आज़माएं</button></a>
                </li>
            </ul>
        </div>
    )
}
