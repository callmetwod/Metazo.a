import "./profileBar.css";
import ProfileIcon from "../profileIcon/profileIcon";

export default function ProfileBar(props) {
  return (
    <div className="profile-container">
      <ProfileIcon icon={'height: 20px'}/>
      <div className="profile-username">{props.name}</div>
    </div>
  );
}

ProfileBar.propTypes = {
    name: String
}
