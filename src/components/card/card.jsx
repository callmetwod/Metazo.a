import ProfileIcon from '../profileIcon/profileIcon'
import './card.css'
import CardProperties from './cardProperties/cardProperties'

export default function Card(props) {
    return (
        <div className="card" style={{ ...props }}>
            <div className="profile-properties">
                <div className="icon">
                    <ProfileIcon
                        width={'5rem'}
                        height={'5rem'}
                        margin={'auto'}
                        marginBottom={'20px'}
                    />
                </div>
                <CardProperties property={'Name:'} value={props.name} />
                <CardProperties property={'Email:'} value={props.email} />
                <CardProperties property={'Created At:'} value={props.created_at} />
            </div>
        </div>
    )
}