import phone from "./assets/images/image-mockups.png";
import introDesktop from "./assets/images/bg-intro-desktop.svg";
import introMobile from "./assets/images/bg-intro-mobile.svg";

// card icons
import online from "./assets/images/icon-online.svg";
import budget from "./assets/images/icon-budgeting.svg";
import onboard from "./assets/images/icon-onboarding.svg";
import api from "./assets/images/icon-api.svg";

//Imagenes
import confetti from "./assets/images/image-confetti.jpg";
import restaurant from "./assets/images/image-restaurant.jpg";
import currency from "./assets/images/image-currency.jpg";
import mockups from "./assets/images/image-mockups.png";
import plane from "./assets/images/image-plane.jpg";

//logo
import logo from "./assets/images/logo.svg";
import alterLogo from "./assets/images/logo-alt.svg";

//social icons
import facebook from "./assets/images/icon-facebook.svg";
import youtube from "./assets/images/icon-youtube.svg";
import twitter from "./assets/images/icon-twitter.svg";
import pinterest from "./assets/images/icon-pinterest.svg";
import instagram from "./assets/images/icon-instagram.svg";

//hamburguer menu
import hamburguer from "./assets/images/icon-hamburger.svg";
import close from "./assets/images/icon-close.svg";

//hooks
import { useEffect, useState } from "react";

//AOS
import Aos from "aos";
import "aos/dist/aos.css";

function App() {

  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    if (clicked) {
      setClicked(false)
    }else{
      setClicked(true)
    }
  }

  useEffect(() => {
    Aos.init();
  }, [])

  useEffect(() => {
    const ResponsiveMenu = document.querySelector('.responsive-menu')

    if (clicked) {
      ResponsiveMenu.classList.remove('hidden')
    }else{
      ResponsiveMenu.classList.add('hidden')
    }
  }, [clicked])


  return (
    <>
      <header className="w-full fixed bg-white h-20 z-30 flex justify-center">
        <div className="max-w-screen-xl w-full flex justify-between">
          <div className="h-full flex items-center" data-aos="fade-right" data-aos-duration="500">
            <img src={logo} alt="" className="w-40 h-auto" />
          </div>
          <nav className="h-full flex items-center hidden md:block">
            <ul className="flex items-center h-full text-[#9698a6] ">
              <a href="#Hero">
                <li className="m-3 hover:text-[#2d314d] transition duration-150 ease-out hover:ease-in" data-aos="fade-down" data-aos-duration="300">
                  Home
                </li>
              </a>
              <a href="#About">
                <li className="m-3 hover:text-[#2d314d] transition duration-150 ease-out hover:ease-in" data-aos="fade-down" data-aos-duration="500">
                  About Us
                </li>
              </a>
              <a href="#Latest">
                <li className="m-3 hover:text-[#2d314d] transition duration-150 ease-out hover:ease-in" data-aos="fade-down" data-aos-duration="700">
                  Latest
                </li>
              </a>
              <a href="#Contact">
                <li className="m-3 hover:text-[#2d314d] transition duration-150 ease-out hover:ease-in" data-aos="fade-down" data-aos-duration="1000">
                  Contact
                </li>
              </a>
            </ul>
          </nav>

          <div className="h-full flex items-center " data-aos="fade-down" data-aos-duration="1000">
            <button className="font-medium text-white my-3 w-fit bg-gradient-to-r from-[#31d35c]  to-[#2bb7da] rounded-full px-6 py-2 bg-red hover:opacity-60 transition duration-150 ease-out hover:ease-in hidden md:block">
              Request Invite
            </button>
          </div>

          <div className="h-full flex items-center md:hidden pr-5" data-aos="fade-left" data-aos-duration="300" >
            <button onClick={handleClick}>
              <img src={hamburguer} alt="" className="hamburguer"/>
            </button>
          </div>
        </div>
      </header>

      <div className="w-full h-screen fixed z-20 flex justify-center items-center responsive-menu bg-[#2d314d] bg-opacity-30" onClick={handleClick} >
        <div className="w-80 h-80 bg-white rounded-lg">
        <nav className="h-full flex items-center justify-center">
            <ul className="flex flex-col items-center justify-center h-full text-[#9698a6] ">
              <a href="#Hero">
                <li className="m-3 hover:text-[#2d314d] transition duration-150 ease-out hover:ease-in" onClick={handleClick}>
                 Home
                </li>
              </a>
              <a href="#About">
                <li className="m-3 hover:text-[#2d314d] transition duration-150 ease-out hover:ease-in" onClick={handleClick}>
                  About Us
                </li>
              </a>
              <a href="#Latest">
                <li className="m-3 hover:text-[#2d314d] transition duration-150 ease-out hover:ease-in" onClick={handleClick}>
                  Latest
                </li>
              </a>
              <a href="#Contact">
                <li className="m-3 hover:text-[#2d314d] transition duration-150 ease-out hover:ease-in" onClick={handleClick}>
                  Contact
                </li>
              </a>
            </ul>
          </nav>
        </div>
      </div>

      <section className="w-full md:flex flex-row-reverse overflow-hidden" id="Hero">
        <div className="hero-img__container w-full flex justify-center md:justify-between relative md:h-[111vh] ">
          <img src={introMobile} alt="" className="w-full md:hidden" />
          <img
            src={introDesktop}
            alt=""
            className="absolute -top-20 left-20 hidden md:block w-full"
          />
          <img
            src={phone}
            alt=""
            className="absolute -top-10 md:-top-0 md:left-52 md:max-w-2xl"
            data-aos="zoom-in" data-aos-duration="1000"
          />
        </div>
        <div className="w-full flex flex-col justify-center md:items-start md:pl-28">
          <h1 className="font-light text-4xl md:text-6xl text-center md:text-start my-3 text-[#2d314d] md:max-w-xl" data-aos="fade-right" data-aos-duration="500">
            Next generation digital banking
          </h1>
          <p className="md:text-start text-center text-sm md:text-base text-[#9698a6] px-2 md:pr-10 md:pl-0 md:max-w-lg" data-aos="fade-right" data-aos-duration="1000">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>

          <div className="flex justify-center" data-aos="fade-up" data-aos-duration="500">
            <button className="font-medium text-white my-3 md:my-5 w-fit bg-gradient-to-r from-[#31d35c]  to-[#2bb7da] rounded-full px-5 py-3 bg-red transition duration-150 ease-out hover:ease-in hover:opacity-60">
              Request Invite
            </button>
          </div>
        </div>
      </section>
      <section className="w-full min-h-screen h-fit flex justify-center " id="About">
        <div className="max-w-screen-xl w-full min-h-screen h-fit flex flex-col items-center">
          <div className="mt-28 md:self-start">
            <h2 className="font-light text-3xl text-[#2d314d] text-center md:text-start" data-aos="fade-right" data-aos-duration="1000">
              Why choose Easybank?
            </h2>
            <p className="text-center md:text-start md:w-full md:max-w-md text-sm md:text-base text-[#9698a6] mt-2" data-aos="fade-left" data-aos-duration="1500">
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finances like never before.
            </p>
          </div>
          <div className="mt-20 md:flex">
            {/* card */}
            <div className="flex flex-col justify-around items-center my-16 w-full md:items-start md:px-4" data-aos="zoom-in" data-aos-duration="500">
              <img src={online} alt="" />
              <h3 className="text-[#2d314d] text-xl my-3">Online Banking</h3>
              <p className="text-center text-sm px-3 md:text-start md:px-0 text-[#9698a6] ">
                Our modern web and mobile applications allow you to keep track
                of your finances wherever you are in the world.
              </p>
            </div>

            {/* card */}
            <div className="flex flex-col justify-around items-center my-16 w-full md:items-start md:px-4" data-aos="zoom-in" data-aos-duration="1000">
              <img src={budget} alt="" />
              <h3 className="text-[#2d314d] text-xl my-3">Simple Budgeting</h3>
              <p className="text-center text-sm px-3 md:text-start md:px-0 text-[#9698a6] ">
                See exactly where your money goes each month. Receive
                notifications when you’re close to hitting your limits.
              </p>
            </div>

            {/* card */}
            <div className="flex flex-col justify-around items-center my-16 w-full md:items-start md:px-4" data-aos="zoom-in" data-aos-duration="2000">
              <img src={onboard} alt="" />
              <h3 className="text-[#2d314d] text-xl my-3">Fast Onboarding</h3>
              <p className="text-center text-sm px-3 md:text-start md:px-0 text-[#9698a6] ">
                We don’t do branches. Open your account in minutes online and
                start taking control of your finances right away.
              </p>
            </div>

            {/* card */}
            <div className="flex flex-col justify-around items-center my-16 w-full md:items-start md:px-4" data-aos="zoom-in" data-aos-duration="3000">
              <img src={api} alt="" />
              <h3 className="text-[#2d314d] text-xl my-3">Open API</h3>
              <p className="text-center text-sm px-3 md:text-start md:px-0 text-[#9698a6] ">
                Manage your savings, investments, pension, and much more from
                one account. Tracking your money has never been easier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* section img cards */}
      <section className="w-full min-h-screen h-fit flex justify-center" id="Latest">
        <div className="max-w-screen-xl w-full h-fit flex flex-col items-center">
          <h2 className="text-[#2d314d] text-3xl mb-5 md:self-start md:text-4xl md:pl-4 md:mt-20" data-aos="fade-right" data-aos-duration="500">
            {" "}
            Latest Articles
          </h2>

          <div className="flex flex-col md:flex-row ">
            {/* card */}
            <div className="w-80 flex flex-col items-center mt-10" data-aos="fade-up" data-aos-duration="500">
              <img src={currency} alt="" className="w-72 h-48 rounded-t-lg" />
              <div className="w-full px-7 mt-2">
                <h3 className="text-xs text-[#9698a6]">By Claire Robinson</h3>
                <h2 className="text-base mt-2 text-[#2d314d]">
                  Receive money in any currency with no fees
                </h2>
                <p className="text-xs text-[#9698a6] mt-2">
                  The world is getting smaller and we’re becoming more mobile.
                  So why should you be forced to only receive money in a single
                  …
                </p>
              </div>
            </div>

            {/* card */}
            <div className="w-80 flex flex-col items-center mt-10" data-aos="fade-up" data-aos-duration="1500">
              <img src={restaurant} alt="" className="w-72 h-48 rounded-t-lg" />
              <div className="w-full px-7 mt-2">
                <h3 className="text-xs text-[#9698a6]"> By Wilson Hutton</h3>
                <h2 className="text-base mt-2 text-[#2d314d]">
                  Treat yourself without worrying about money
                </h2>
                <p className="text-xs text-[#9698a6] mt-2">
                  Our simple budgeting feature allows you to separate out your
                  spending and set realistic limits each month. That means you …
                </p>
              </div>
            </div>

            {/* card */}
            <div className="w-80 flex flex-col items-center mt-10" data-aos="fade-up" data-aos-duration="2000">
              <img src={plane} alt="" className="w-72 h-48 rounded-t-lg" />
              <div className="w-full px-7 mt-2">
                <h3 className="text-xs text-[#9698a6]">By Wilson Hutton</h3>
                <h2 className="text-base mt-2 text-[#2d314d]">
                  Take your Easybank card wherever you go
                </h2>
                <p className="text-xs text-[#9698a6] mt-2">
                  We want you to enjoy your travels. This is why we don’t charge
                  any fees on purchases while you’re abroad. We’ll even show you
                  …
                </p>
              </div>
            </div>

            {/* card */}
            <div className="w-80 flex flex-col items-center mt-10" data-aos="fade-up" data-aos-duration="2500">
              <img src={confetti} alt="" className="w-72 h-48 rounded-t-lg" />
              <div className="w-full px-7 mt-2">
                <h3 className="text-xs text-[#9698a6]">By Claire Robinson</h3>
                <h2 className="text-base mt-2 text-[#2d314d]">
                  Our invite-only Beta accounts are now live!
                </h2>
                <p className="text-xs text-[#9698a6] mt-2">
                  After a lot of hard work by the whole team, we’re excited to
                  launch our closed beta. It’s easy to request an invite through
                  the site ...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="w-full mt-20 flex flex-col items-center bg-[#2d314d]" id="Contact">
        <div className="my-5">
          <img src={alterLogo} alt="" className="" />
        </div>
        <div className="flex justify-around w-36 my-2">
          <div>
            <img src={facebook} alt="" />
          </div>
          <div>
            <img src={youtube} alt="" />
          </div>
          <div>
            <img src={twitter} alt="" />
          </div>
          <div>
            <img src={pinterest} alt="" />
          </div>
          <div>
            <img src={instagram} alt="" />
          </div>
        </div>
        <div className="text-center text-white text-sm mt-2">
          <ul className="md:flex">
            <a href="#Home">
              <li className="m-3">Home</li>
            </a>
            <a href="#About">
              <li className="m-3">About Us</li>
            </a>
            <a href="#Latest">
              <li className="m-3">Latest</li>
            </a>
            <a href="Contact">
              <li className="m-3">Contact</li>
            </a>
          </ul>

          <div className="flex justify-center my-5 md:my-0">
            <button className="font-medium text-white my-3 md:my-5 w-fit bg-gradient-to-r from-[#31d35c]  to-[#2bb7da] rounded-full px-6 py-3 bg-red transition duration-150 ease-out hover:ease-in hover:opacity-60">
              Request Invite
            </button>
          </div>
        </div>

        <p className="text-white opacity-40 text-sm my-2 ">
          © Easybank. All Rights Reserved. Develped by{" "}
          <a href="https://github.com/ElJosecito">
            <span className="text-[#2bb7da]">Jose Martinez</span>
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
