import { useEffect, useState } from 'react'
import {BrowserRouter, Link} from 'react-router-dom'
import "./Navbar.scss"

const Navbar = () => {
    const [active, setActive]= useState(false)
    const [open, setOpen]= useState(false)
    //const {pathname}= useLocation();
    const pathname="/"

    const isActive=()=>{
        window.scrollY > 0? setActive(true): setActive(false);
    };

    useEffect(()=>{
    window.addEventListener("scroll", isActive);
    return ()=>{
        window.removeEventListener("scroll", isActive);
    };
    },[]);

   const currrentUser={
    isSeller: false, name: "samson", id: 1
   }

   const currentUser=null

  return (
    <div className={active || pathname !== "/"? "navbar active": "navbar"}>
        <div className='container'>
            <div className="logo">
                <Link className='link' to="/" >
                    <span className="text">
                        Fivver
                    </span>
                </Link>
                <span className="dot">
                    .
                </span>

            </div>
            <div className="links">
                <span>Liverr Business</span>
                <span>Explore</span>
                <span>English</span>
                {!currentUser?.isSeller && <span>Become A seller</span>}
                { currentUser? (
                    <div className="user" onClick={()=>{setOpen(!open)}}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvB7uUW4nmqp33WtyMoJuy2xB9XdNGgXx64daOgHAP&s" alt="" />
                    <span>{currentUser.name}</span>
                    {open && <div className="options">
                        {
                            currentUser.isSeller &&(
                                <>
                                <Link className="gigs">
                                    Gigs
                                </Link>
                                <Link className="link">
                                    Add New Gig
                                </Link>
                                </>
                            )}
                            <Link className="link">
                                Orders
                            </Link>
                            <Link className="messages">
                                Messages
                            </Link>
                            <Link className="link">
                                Logout
                            </Link>
                    </div>
                    }
                </div>
              
                ):(
                    <>
                    <span>
                        Sign In 
                    </span>
                    <Link className="link">
                        <button>
                            Join
                        </button>
                    </Link>
                    </>
                )}
                </div>
            </div>
            {( active || pathname !=="/") &&(
                    <>
                    <hr />
                    <div className="menu">
                        <Link className="link menuLink">
                            Graphics and Design
                        </Link>
                        <Link className="link menuLink">
                            Video and Animation
                        </Link>
                        <Link className="link menuLink">
                            Writing and Translation
                        </Link>
                        <Link className="link menuLink">
                            AI Services
                        </Link>
                        <Link className="link menuLink">
                            Digital Marketing
                        </Link>
                        <Link className="link menuLink">
                            Music and Audio
                        </Link>
                        <Link className="link menuLink">
                            Programming and Tech
                        </Link>
                        <Link className="link menuLink">
                            Business
                        </Link>
                        <Link className="link menuLink">
                            Lifestyle
                        </Link>
                    </div>
                    <hr />
                    </>
                )}
        </div>
  )
}

export default Navbar