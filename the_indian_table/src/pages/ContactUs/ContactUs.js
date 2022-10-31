import React from "react";
import Banner from "../ContactUs/Components/Banner";
import Detail from "./Components/Detail";
function ContactUs() {
  return (
    <div>
      <Banner />
      <div className="grid md:grid-cols-2 2xl:grid-cols-3 lg:grid-cols-3 [&>*]:m-4 ">
        <Detail
          title="Email Us"
          icon="fa-solid fa-envelope"
          text="anz.support@datman.je"
          link="mailto:anz.support@datman.je"
        />
        <Detail
          title="Visit Us"
          icon="fa-solid fa-location-dot"
          text="68 Nelson St, Wallsend
          NSW 2287, Australia"
          link="https://www.google.com/maps/place/The+Indian+table/@-32.9001426,151.6665429,17z/data=!3m1!4b1!4m5!3m4!1s0x6b733fd111ae9fbf:0x999426709f73273b!8m2!3d-32.9001841!4d151.668693"
        />
        <Detail
          title="Call Us"
          icon="fa-solid fa-phone"
          text="0249500621"
          link="tel:0249500621"
        />
      </div>
    </div>
  );
}

export default ContactUs;
