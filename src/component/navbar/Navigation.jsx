
import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";


const Navigation = () => {

    return(
       
        <Fragment>

            <div className="nav-container">
                <div className="logo">
                    <Link to= '/' className="logo-2">WestyCode</Link>
                </div>

                <div className="navcon">
                    <Link to='/' className="link">HOME</Link>
                    <Link to='/about' className="link">ABOUT</Link>
                    <Link to='/blog' className="link">BLOG</Link>
                    <Link to='/pricing' className="link">PRICING</Link>
                    <Link to='/faq' className="link">FAQS</Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;