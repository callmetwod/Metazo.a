import logo from '../../assets/logo/white.svg'
import './admin.css'

import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react"
import { useState } from 'react'
import Card from '../../components/card/card'
import Button from '../../components/button/button';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination} from 'swiper/modules';

export default function Admin() {

    const [data, setData] = useState([])

    async function showSOSs() {
        try {
            const response = (await axios.get('https://metazoa-api.onrender.com/soss')).data.SOSs
            console.log(response)
            setData(response)
        } catch (error) {
            console.error(error);
        }
    }

    async function showUsers() {
        try {
            const response = (await axios.get('https://metazoa-api.onrender.com/users')).data.allUsers
            console.log(response)
            setData(response)
        } catch (error) {
            console.error(error);
        }
    }

    async function showProfessionals() {
        try {
            const response = (await axios.get('https://metazoa-api.onrender.com/professionals')).data.professionals
            console.log(response)
            setData(response)
        } catch (error) {
            console.error(error);
        }
    }

    async function showData() {
        console.log(data)
    }

    return (
        <div className="admin">
            <img id='logo' src={logo} alt="white logo" />
            <body>
                <div id="categories">
                    <div className="admin-categories">
                        <div className="title"><h1>Vizualizar Dados</h1></div>
                        <div className="categories-buttons">
                            <Button function={showUsers} title={'Users'} />
                            <Button function={showProfessionals} title={'Professionals'} />
                            <Button function={showSOSs} title={'SOSs'} />
                            {/* <Button function={showData} title={'Mostrar Data'} /> */}
                        </div>
                    </div>
                </div>
                <div className="cards">
                    <Swiper
                    modules={[Navigation, Pagination]}
                        slidesPerView={6}
                        effect="coverflow"
                        grabCursor={true}
                        className="mySwiper"
                        pagination={{
                            dynamicMainBullets: true,
                            type: "bullets"
                        }}
                        breakpoints={{
                            // when window width is >= 
                            0:{
                                slidesPerView: 1
                            },
                            640: {
                              slidesPerView: 2,
                            },
                            768: {
                              slidesPerView: 3,
                            },
                            1024: {
                              slidesPerView: 4,
                            },
                            1440: {
                              slidesPerView: 5,
                            },
                            2560: {
                              slidesPerView: 7,
                            },
                          }}
                    >
                        {<div swipers>
                            {
                                data.map(function (iten) {
                                    return (
                                        <SwiperSlide key={iten.id}><Card name={iten.name} email={iten.email} created_at={iten.createdAt} /></SwiperSlide>

                                    )
                                })
                            }
                        </div>}
                    </Swiper>
                </div>
            </body>
        </div>
    )
}