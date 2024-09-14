import React from 'react'
import Info from "./Homepages/Info";
import Products from "./Homepages/Products";
import CustomOrder from "./Homepages/CustomOrder";
import CustomerFeedback from "./Homepages/CustomerFeedback";
import ContactInfo from "./Homepages/ContactInfo";

const Home = () => {
  return (
    <div>
      <Info />
      <Products />
      <CustomOrder />
      <CustomerFeedback />
      <ContactInfo />
    </div>
  )
}

export default Home
