import './cardProperties.css'

export default function CardProperties(props){
    return(
        <div className='card-property'>
            <div className="property-name"><p>{props.property}</p></div>
            <div className="property-value"><p>{props.value}</p></div>
        </div>
    )
}

CardProperties.propTypes