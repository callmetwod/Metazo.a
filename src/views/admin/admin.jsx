import Card from '../../components/card/card'
import ProfileBar from '../../components/profileBar/profileBar'
import './admin.css'


export default function Admin() {
    return(
        <div className="admin">
            <div className="profile">
                <ProfileBar name={'David'}/>
            </div>
            <div className="container-main">
                <Card/>
            </div>
            <div className="footer"></div>
        </div>
    )
}