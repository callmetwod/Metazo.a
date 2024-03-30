// import { data, setData } from "../../controllers/data.controller";
// import { useState } from "react";
// import Button from "../button/button";
// import './adminCategories.css'
// import axios from "axios";
// import { data, setData } from "../../controllers/controller";

// export default function AdminCategories(props) {

//     async function showSOSs(data) {
//         try {
//             const response = (await axios.get('https://metazoa-api.onrender.com/soss')).data.SOSs
//             console.log(response)
//             setData(response)
//             await data
//             console.log('data é:'+ data)
//         } catch (error) {
//             console.error(error);
//         }
//     }

//     async function showUsers() {
//         try {
//             const response = (await axios.get('https://metazoa-api.onrender.com/users')).data.allUsers
//             console.log(response)
//             setData(response)
//             await data
//             console.log('data é:'+data)
//         } catch (error) {
//             console.error(error);
//         }
//     }


//     async function showProfessionals() {
//         try {
//             const response = (await axios.get('https://metazoa-api.onrender.com/professionals')).data.professionals
//             console.log(response)
//             setData(response)
//             await data
//             console.log(`data é: ${data}`)
//         } catch (error) {
//             console.error(error);
//         }
//     }


//     return (
//         <div className="admin-categories">
//             <div className="title"><h1>Gerenciar Dados</h1></div>
//             <div className="categories">
//                 <Button function={showUsers} title={'Users'} />
//                 <Button function={showProfessionals} title={'Professionals'} />
//                 <Button function={showSOSs} title={'SOSs'} />
//             </div>
//             <p>{data}</p>
//         </div>
//     )
// }