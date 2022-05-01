import Head from 'next/head'
import Image from 'next/image'
import NavigationBar from '../components/NavigationBar/Navigationbar'
import ProfileDetails from '../components/ProfileDetails/ProfileDetails'
import styles from '../styles/Home.module.css'
import { parseCookies } from 'nookies'
import axios from 'axios'
import { Button } from 'antd'
import Landing from '../components/Landing/Landing'


const Home = () => {
  const jwt = parseCookies().jwt;

  return (
    <div>
      <Landing />
    </div>
  )
}


// export async function getServerSideProps(ctx: any) {
//   const jwt = parseCookies(ctx).jwt;


//   const res = await axios.get("http://localhost:1337/api/users/me", {
//     headers: {
//       Authorization: `Bearer ${jwt}`
//     }
//   })
//   const userData = await res.data;

//   console.log(userData);


//   return {
//     props: {
//       userData
//     }
//   }
// }


export default Home
