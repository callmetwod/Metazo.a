import './header.css'
import horizontalLogo from '../../assets/logo/1x/coloredLogoVertical.png'
import HeaderLink from '../headerLink/headerLink'
import Button from '../button/button'

export default function Header() {
    return(
        <div className='header'>
            <img src={horizontalLogo} alt="metazoa horizontal logo" />
            <HeaderLink name={"São Bernardo"}/>
            <input type="text" id="input" value="Search..." />
            <HeaderLink name={"Mensagem"}/>
            <HeaderLink url={"../../assets/icons/animal-tasmanian-devil-svgrepo-com.svg"} name={"Notificações"}/>
            <Button/>
        </div>
    )
}