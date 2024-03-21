import Categories from '../../components/categories/categories'
import Header from '../../components/header/header'
import Slider from '../../components/slider/slider'
import './home.css'

export default function Home() {
    return (
        <div className='home'>
            <Header/>
            <Slider/>
            <Categories/>
        </div>
    )
}