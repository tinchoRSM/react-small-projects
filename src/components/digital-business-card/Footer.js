import React from "react";
import Facebook from "../../img/digital-business-card/socials/Facebook.js";
import Twitter from "../../img/digital-business-card/socials/Twitter.js";
import Github from "../../img/digital-business-card/socials/Github.js";
import Instagram from "../../img/digital-business-card/socials/Instagram.js";

export default function Footer(){
    return (
        <div className="footer-business">
            <Twitter/>
            <Facebook/>
            <Instagram/> 
            <Github/>
        </div>
    )
}