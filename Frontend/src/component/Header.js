// import React from "react";
// import './style.css';
// const Header = ({ name, memberSince, rewards, balance, offers, savings }) => {
//   return (
//     <div className="header">
//       <h1>Welcome {name}!</h1>
//       <p>Member Since {memberSince}</p>
//       <div className="stats">
//         <div>
//           <p>Rewards Earned</p>
//           <h2>{rewards}</h2>
//         </div>
//         <div>
//           <p>Balance</p>
//           <h2>{balance}</h2>
//         </div>
//         <div>
//           <p>Available Offers</p>
//           <h2><button className="offers-button">{offers}</button></h2>
//         </div>
//         <div>
//           <p>Total Savings</p>
//           <h2>{savings}</h2>
//         </div>
//       </div>
//     </div>
//   );
// };
 
// export default Header;
 

import React, { useState } from "react";
import { BrowserRouter as Router,Route, Switch } from "react-router-dom";


// Import Font Awesome Icons
import { FaCoins, FaWallet, FaGift, FaPiggyBank } from "react-icons/fa";
import ProgressBar from "./ProgressBar";
import OffersPage from "./OffersPage";
import { Link,Typography } from "@material-ui/core";
 
const Header = ({ name, memberSince, rewards, balance, offers, savings,handleOfferPage }) => {
 
  const [tier,setTier]=useState('Bronze');
  const handleTierChange=(newTier)=>{
    setTier(newTier);
  }
  const handleOffersClick=()=>{
     
     
  }
  return (
    <div className="header">
      <h1>Welcome {name}!</h1>
      <p className="membership-info">View Benefits for {tier} Members</p>
      <p className="membership-date">Member Since {memberSince}</p>
      <div className="stats">
        <div className="stat-item">
          <div className="box">
            <h2><FaCoins className="icon" />{rewards}</h2>
          </div>
          <p>Rewards Earned</p>
        </div>
        <div className="stat-item">
          <div className="box">
            <h2><FaWallet className="icon" />{balance}</h2>
          </div>
          <p>Balance</p>
        </div>
        <div className="stat-item">
          <div className="box">
          <h2><Link to="/offerspage" onClick={handleOfferPage}><FaGift className="icon" />{ offers}</Link></h2>
            {/* <h2><button onClick={()=>{handleOfferPage();window.open="/offerspage";}} className="offers-button" ><FaGift className="icon" />{ offers}</button></h2> */}
            
          </div>
          <p>Available Offers</p>
        </div>
        <div className="stat-item">
          <div className="box">
            <h2><FaPiggyBank className="icon" />{savings}</h2>
          </div>
          <p>Total Saving</p>
        </div>
      </div>
      <div>
        <ProgressBar value={rewards} onTierChange={handleTierChange}/>
    </div>
    </div>

    
  );
};
 
export default Header;
 