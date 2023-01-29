//styles
import './Logo.css'

export default function Logo({ src }) {
    return (
        <div className="logo">
            <img src={src} alt="user avatar" />
        </div>
    )
}
