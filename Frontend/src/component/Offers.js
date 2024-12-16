import React from 'react';
import { useRef, useState, useEffect } from 'react';

 
function Offers({ offerNumber, oneLinerDescription, couponCode }) {
  
    const [isCopied, setIsCopied] = useState(false);
    const couponCodeRef = useRef(null);
   
    useEffect(() => {
        if(couponCodeRef.current){
            couponCodeRef.current.textContent = couponCode;
        }
    }, [couponCode]);
   
    const handleCopy = () => {
      navigator.clipboard.writeText(couponCode);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000); // Reset the copied state after 2 seconds
    };
    const handleRedeem = () => {
        // Redirect to the redemption URL
        window.open = "https://www.amazon.com/";
      };

    return (
    <div className="offer-container">
        {/* <div className="offer">
            <div className="offer-details">
                <h3>Offer 1</h3>
                <p>One Line Description</p>
            </div>
            <div className="offer-actions">
                <button className="copy-coupon-btn">Copy Coupon Code</button>
                <button className="redeem-coupon-btn">Redeem Coupon</button>
            </div>
        </div> */}
      <div className="offer-number">
            <h3>Offer {offerNumber}</h3>
            <p>{oneLinerDescription} </p></div>
      {/* <div className="one-liner-description">{oneLinerDescription}</div> */}
      <div className="coupon-actions">
        <button className="copy-coupon-btn" onClick={handleCopy}>
            Copy Coupon Code
        </button>
        {isCopied && <div className='copied-message'>Coupon Code Copied!</div>}
        <button className="redeem-coupon-btn"><a href='https://www.amazon.com/' target={"_blank"}>
            Redeem Coupon</a>
        </button>      
      </div> 
    </div>
  );
}
 
export default Offers;
 