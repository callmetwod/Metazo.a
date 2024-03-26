import ProfileIcon from '../profileIcon/profileIcon'
import './card.css'
import CardProperties from './cardProperties/cardProperties'

export default function Card(){
    return (
        <div className="card">
            <div className="profile">
                <ProfileIcon
                width={'5rem'} 
                height={'5rem'} 
                margin={'auto'}
                margin-bottom={'20px'}
                />
                <CardProperties property={'Name:'} value={'Deivide E A Menezes'}/>
                <CardProperties property={'Email:'} value={'Deivide E A Menezes'}/>
                <CardProperties property={'Password:'} value={'Deivide E A Menezes'}/>
            </div>
        </div>
    )
}