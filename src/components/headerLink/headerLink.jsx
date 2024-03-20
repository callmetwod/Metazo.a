import './headerLink.css'
import localPin from '../../assets/icons/location-pin-svgrepo-com.svg'

export default function HeaderLink(props){
    return(
        <div className='headerLink'>
            <img src={localPin} alt="LocalPin" />
            <a href="">{props.name}</a>
        </div>
    )
    
}

HeaderLink.propTypes