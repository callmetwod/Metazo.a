import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react"
import { useState } from 'react'
import Card from '../card/card'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function CardsSlider(params) {

    const url = `https://metazoa-api.onrender.com/soss`

    const [users, setUsers] = useState([])

    async function handleUsers() {
        try {
            const response = (await axios.get(url)).data.SOSs
            console.log(response)
            setUsers(response)
        } catch (error) {
            console.error(error);
        }
    }

    async function showUsers() {
        await users
        console.log(users)
    }

    function deleteUsers() {
        setUsers([])
    }

    return (
        <div className="cards">
            <Swiper
                slidesPerView={6}
                effect="coverflow"
                grabCursor={true}
                pagination={{
                    dynamicMainBullets: true,
                    type: "bullets"
                }}
                /* height: 100%; */

                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {<div swipers>
                    {
                        users.map(function (iten) {
                            return (
                                <SwiperSlide key={iten.id}><Card name={iten.name} email={iten.email} created_at={iten.createdAt} /></SwiperSlide>

                            )
                        })
                    }
                </div>}
            </Swiper>
        </div>
    )
}


