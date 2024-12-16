// import './App.css';
// import React from 'react';
// import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import CusReg from './components/customer/CusReg';
// import CusLogin from './components/customer/CusLogin';


// function App() {
//   // return (
//   //   <>
//   //   <Router>
//   //     <Switch>
//   //       <Route path='/signup' component={CusReg}/>
//   //       <Route path='/login' component={CusLogin}/>
//   //     </Switch>
//   //   </Router>
//   //   </>
//   // );
// }

// export default App;


import React, { useState } from "react";
import { BrowserRouter as Router,Route  } from "react-router-dom";
import Header from "./component/Header";
import RewardsTable from "./component/RewardsTable";
import OffersPage from "./component/OffersPage";

 
function App () {
  const [user,setUser] =useState( {
    name: "Ashok Kumar",
    memberSince: "October 2024",
    offers: 10,
    savings: 790,
   // currentTier: 70, // Assume percentage for platinum level
  });
    const [purchases,setPurchases]=useState([
      { name: "Redeemed on MNO", rewards: -460 },
      { name: "Purchase of ABC", rewards: +1000 },
      { name: "Purchase of XYZ", rewards: +60 },
      { name: "Return of PQR", rewards: -30 },
      { name: "Purchase of PQR", rewards: +30 },
    ]);
 const balance=purchases.reduce((sum,reward)=>sum+reward.rewards,0);
 const totalRewards=purchases
      .filter(reward=> reward.rewards>0)
      .reduce((sum,reward)=>sum+reward.rewards,0);
  
  const [trigger,setTrigger]=useState(false);

  const handleOfferPage=()=>{
    setTrigger(true);
    console.log("trigger",trigger);
    //window.location.href="/offerspage";
  }
  return (
    
    <div className="app">
      <Router>
        <Route path="/header" element={<Header 
        name={user.name}
        memberSince={user.memberSince}
        rewards={totalRewards}
        balance={balance}
        offers={user.offers}
        savings={user.savings}
        handleOfferPage={handleOfferPage}/>}></Route>
      </Router>
      {!trigger?
      <>
      <Header
        name={user.name}
        memberSince={user.memberSince}
        rewards={totalRewards}
        balance={balance}
        offers={user.offers}
        savings={user.savings}
        handleOfferPage={handleOfferPage}
      />
      <RewardsTable purchases={purchases} /></>:
      <OffersPage />
      //  <Router>
      // <Switch>
      //   <Route path='/offerspage' component={OffersPage} />  
      // </Switch>
      // </Router>  
    }
      {/* <Router>
        <Switch>
          <Route pathe="/" element={<><Header name={user.name}
        memberSince={user.memberSince}
        rewards={totalRewards}
        balance={balance}
        offers={user.offers}
        savings={user.savings}
        handleOfferPage={handleOfferPage}/><RewardsTable purchases={purchases} /></>}></Route>
          <Route pathe="/offerpage" element={<OffersPage/>}></Route>
        </Switch>
      </Router> */}
        
    </div>
  );
};
 
export default App;
 