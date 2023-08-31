import React from "react";
import profileImage from "../assets/profile.jpg";
import "../css/profile.css";
import {BsFillTelephoneInboundFill, BsLinkedin} from "react-icons/bs";
import {BiLogoGmail} from "react-icons/bi";
import {ImFolderDownload} from "react-icons/im";
import { Link } from "react-router-dom";

const Profile = () => {

    const handlePhoneClick = () => {
        window.open('tel:+1 8573903227');
      };
    

  return (
    <React.Fragment>
      <div className="container">
        <div className="profile-container">
          <img className="profile-img" src={profileImage} />

            <div>Sharmela C</div>
            Cyber Security Engineer


            <div className="icons-container">
                <Link className="icon" to="mailto:sharmela1294@gmail.com "> <BiLogoGmail color={"#ffffff"} size={20}/>   </Link>
                <Link className="icon" to="https://www.linkedin.com/in/sharmelac/"> <BsLinkedin color={"#ffffff"} size={20}/>  </Link>
                <Link className="icon" to=""> <ImFolderDownload color={"#ffffff"} size={20}/>  </Link>
                <Link className="icon" to="#" onClick={handlePhoneClick}> <BsFillTelephoneInboundFill color={"#ffffff"} size={20}/>  </Link>
                

            </div>


        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
