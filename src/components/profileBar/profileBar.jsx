import "./profileBar.css";
import ProfileIcon from "../profileIcon/profileIcon";

export default function ProfileBar(props) {
  return (
    <div className="profile-container">
      <ProfileIcon/>
      <div className="profile-username">{props.name}</div>
    </div>
  );
}

ProfileBar.propTypes = {
    name: String
}
