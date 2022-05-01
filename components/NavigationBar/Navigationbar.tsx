import Link from "next/link";
import logo from "./images/logo.png"
import { parseCookies, destroyCookie } from "nookies";
import { useRouter } from 'next/router'

const NavigationBar = () => {
  const jwt = parseCookies().jwt;

  const router = useRouter();

  const handleLogout = () => {
    destroyCookie(null, jwt);
    router.push("http://localhost:3000/login");
  }
  return <div>
    <div className="brand">

    </div>
    <div className="list">
      <div className="brand-div">
        <img style={{ width: "40%" }} src={logo.src} alt="brand"></img>
        <br></br><br></br>
      </div>
      <ul>
        <li><Link href={"/home"}>Home</Link></li>
        <li><Link href={"/records"}>Gate records</Link></li>
        <li><Link href={"/scan"}>Scan QRcode</Link></li>
        <li><Link href={"/employees"}>Employees List</Link></li>
        <li><Link href={"/home"}><a onClick={handleLogout}>Logout</a></Link></li>
      </ul>
    </div>
  </div>
}

export default NavigationBar;
