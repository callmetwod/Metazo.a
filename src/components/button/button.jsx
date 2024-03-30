import './button.css'

export default function Button(params){
    return (
     <button style={params.style}onClick={params.function}>{params.title}</button>
    )
 }