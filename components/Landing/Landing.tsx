import laptopImg from './images/laptop.png';
import phoneImg from './images/phone.png';
import logoT from './images/logo.png';
import Image from 'next/image';
import Link from 'next/link';


const Landing = () => {
  return (<div>
    <section id="main">
      <div className="main-container">
        <Image className="logo" src={logoT} alt="logo" />
        <div id="btns">
          <button className="lnd-btn"><Link href={"/home"}>Home Page</Link></button>
          <button className="lnd-btn"><Link href={"/login"}>Login</Link></button>
        </div>
      </div>
    </section>


    <section id="future">
      <h2 className="headings">Designed for the future</h2>

      <div className="future-container">
        <div className="introducing">
          <h2 className="headings">Lorem Ipsum</h2>
          <p className="paragraphs">Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.
            The editor supports management of multiple blogs and allows easy manipulation of embeds such as images,
            videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or
            change the looks of a blog.</p>
        </div>

        <div className="robust">
          <h2 className="headings">Lorem Ipsum</h2>
          <p className="paragraphs">Flexible content management enables users to easily move through posts. Increase the usability of your blog
            by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
        </div>
      </div>

    </section>


    <section id="infrastructure">
      <Image className="infra-img" src={phoneImg} alt="phones" />
      <div className="infra-container">

        <h1 className="headings-white">Lorem Ipsum</h1>
        <p className="infra-paragraph">With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.
          This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>

      </div>
      <div className="clear"></div>
    </section>


    <section id="add-info">
      <div className="add-info-container">
        <div className="free">
          <h2 className="headings">Free, open, simple</h2>
          <p className="paragraphs">Blogr is a free and open source application backed by a large community of helpful developers. It supports
            features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools,
            and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
        </div>
        <div className="powerfull">
          <h2 className="headings">Powerful tooling</h2>
          <p className="paragraphs">Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
            capable of producing even the most complicated sites.</p>
        </div>
        <div className="clear"></div>
      </div>
    </section>


    <section id="footer">
      <div className="footer-main">

        <div className="footer-container">
          <Image className="logo" src={logoT} alt="logo" />
        </div>
        <div className="footer-container">
          <a className="link" href="#">Product</a>
          <ul className="list" aria-labelledby="navbarScrollingDropdown1"><br></br>
            <li><a className="item" href="#">Overview</a></li>
            <li><a className="item" href="#">Pricing</a></li>
            <li><a className="item" href="#">Marketplace</a></li>
            <li><a className="item" href="#">Features</a></li>
            <li><a className="item" href="#">Integrations</a></li>
          </ul>
        </div>

        <div className="footer-container">
          <a className="link" href="#">Company</a>
          <ul className="list" aria-labelledby="navbarScrollingDropdown1"><br></br>
            <li><a className="item" href="#">About</a></li>
            <li><a className="item" href="#">Team</a></li>
            <li><a className="item" href="#">Blog</a></li>
            <li><a className="item" href="#">Careers</a></li>
          </ul>
        </div>

        <div className="footer-container">
          <a className="link" href="#">Connect</a>
          <ul className="list" aria-labelledby="navbarScrollingDropdown1"><br></br>
            <li><a className="item" href="#">Contact</a></li>
            <li><a className="item" href="#">Newsletter</a></li>
            <li><a className="item" href="#">LinkedIn</a></li>
          </ul>
        </div>

      </div>
    </section>
  </div>
  )
}


export default Landing;
