import React from 'react'
import './Header.css';
import Instagram from './Instagram';

function Header() {
    return (
        <div className="headerConatiner bg-transparent text-emphasis-info row">
            <div className="d-flex">
                <div className="container" style={{}}>
                    <h1 className="py-2 font-monospace text-light ui-btn">
                        <span>Portfolio</span></h1>
                        
                </div>

                <a href='https://shorturl.at/wCJQ1' className="py-2 px-2">
                    <Instagram icon={'linkedin'} />
                </a>
                <a href='https://x.com/SohailP53076688?t=2c_RHFvxAH1-Smz0FsGvww&s=09' className="py-2 px-2">
                    <Instagram icon={'twitter'} />
                </a>
                <a href='https://www.instagram.com/sohail.code?igsh=cjRrdGZoYnBobTBl' className="py-2 px-2">
                    <Instagram icon={'instagram'} />
                </a>
                <a href='https://github.com/sohail005' className="py-2 px-2">
                    <Instagram icon={'github'} />
                </a>
                <a href='https://discord.gg/nnw484GY'
                    className="py-2 px-2">
                    <Instagram icon={'discord'} />
                </a>
            </div>
           
        </div>
    )
}

export default Header