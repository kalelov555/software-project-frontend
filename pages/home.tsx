import Head from 'next/head'
import NavigationBar from '../components/NavigationBar/Navigationbar'
import ProfileDetails from '../components/ProfileDetails/ProfileDetails'
import styles from '../styles/Home.module.css'
import { parseCookies } from 'nookies'
import axios from 'axios'
import Footer from '../components/Footer/Footer'

const MainPage = ({ userData }: { userData: any }) => {

  const { id, username, email, full_name, description, phone, avatar } = userData;

  return (
    <div className={styles.container} style={{ padding: "3% 5%" }}>
      <Head>
        <title>Happy Life</title>
        <meta name="description" content="Happy Life" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <section id="home-page" style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ width: "70%", display: "flex", justifyContent: "center" }} >

          <ProfileDetails
            id={id}
            username={username}
            email={email}
            full_name={full_name}
            description={description}
            phone={phone}
            avatar={avatar} />
        </div>

        <div style={{ width: "25%" }} >
          <NavigationBar />
        </div>

      </section>


      <Footer />
    </div>
  )
}


export async function getServerSideProps(ctx: any) {
  const jwt = parseCookies(ctx).jwt;

  const res = await axios.get("http://localhost:1337/api/users/me", {
    headers: {
      Authorization: `Bearer ${jwt}`
    }
  })
  const userData = await res.data;
  console.log(userData)


  return {
    props: {
      userData
    }
  }
}


export default MainPage
