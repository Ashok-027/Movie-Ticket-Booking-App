import React from 'react';
import Offers from './Offers';
 
function OffersPage() {
  const offersData = [
    {
      offerNumber: 1,
      oneLinerDescription: 'One Liner Description',
      couponCode: 'COUPON_CODE_1'
    },
    {
        offerNumber: 2,
        oneLinerDescription: 'One Liner Description',
        couponCode: 'COUPON_CODE_2'
      },{
        offerNumber: 3,
        oneLinerDescription: 'One Liner Description',
        couponCode: 'COUPON_CODE_3'
      },{
        offerNumber: 4,
        oneLinerDescription: 'One Liner Description',
        couponCode: 'COUPON_CODE_4'
      },
      {
        offerNumber: 1,
        oneLinerDescription: 'One Liner Description',
        couponCode: 'COUPON_CODE_1'
      },
      {
          offerNumber: 2,
          oneLinerDescription: 'One Liner Description',
          couponCode: 'COUPON_CODE_2'
        },{
          offerNumber: 3,
          oneLinerDescription: 'One Liner Description',
          couponCode: 'COUPON_CODE_3'
        },{
          offerNumber: 4,
          oneLinerDescription: 'One Liner Description',
          couponCode: 'COUPON_CODE_4'
        },

        {
          offerNumber: 2,
          oneLinerDescription: 'One Liner Description',
          couponCode: 'COUPON_CODE_2'
        },{
          offerNumber: 3,
          oneLinerDescription: 'One Liner Description',
          couponCode: 'COUPON_CODE_3'
        },{
          offerNumber: 4,
          oneLinerDescription: 'One Liner Description',
          couponCode: 'COUPON_CODE_4'
        },
        {
          offerNumber: 2,
          oneLinerDescription: 'One Liner Description',
          couponCode: 'COUPON_CODE_2'
        },{
          offerNumber: 3,
          oneLinerDescription: 'One Liner Description',
          couponCode: 'COUPON_CODE_3'
        },{
          offerNumber: 4,
          oneLinerDescription: 'One Liner Description',
          couponCode: 'COUPON_CODE_4'
        },
    // ... (Add more offers here)
  ];
 
  return (
    <div className="offers-page">
      <h1>Available Offers and Coupons Designed for You</h1>
      <div className="offers-container">
        {offersData.map((offer, index) => (
          <Offers
            key={index}
            offerNumber={offer.offerNumber}
            oneLinerDescription={offer.oneLinerDescription}
            couponCode={offer.couponCode}
          />
        ))}
      </div>
      <p>These offers are curated for the User based on past purchases, interests, browsing patterns, etc.</p>
    </div>
  );
}
 
export default OffersPage;
 