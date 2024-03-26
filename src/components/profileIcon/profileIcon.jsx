import profileIcon from '../../assets/icons/ProfileIcon.svg'
import './profileIcon.css'

export default function ProfileIcon(props) {
    const style = {...props}
    return (
        <div style={style} className="profile-icon">
            <img src={profileIcon} alt="profileIcon" />
        </div>
    )
}