import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="Banner"
      />
      <div className="products--grid">
        <div className="home__row">
          <Product
            id="21232"
            title="smart tv"
            price={199.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71YZlXXFktL._AC_SL1500_.jpg"
          />
          <Product
            id="21233"
            title="Oculus Quest All-in-one VR Gaming Headset – 64GB"
            price={499.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41uxvP4KUZL._SL1000_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="21234"
            title="HP Chromebook 14-Inch HD Laptop, Intel Celeron N4000, 4 GB RAM, 32 GB eMMC, Chrome (14a-na0020nr, Ceramic White)"
            price={327.9}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/91XR%2B02AJBL._AC_SL1500_.jpg"
          />
          <Product
            id="21235"
            title="Acer Predator Galea 300 White Gaming Headset - TrueHarmony Technology, 40mm Driver Bio-Cellulose, Retractable Omni-Directional Microphone"
            price={24.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51DEMlJNXfL._AC_SL1080_.jpg"
          />
          <Product
            id="21236"
            title="TP-Link AC1750 Smart WiFi Router - Dual Band Gigabit Wireless Internet Router for Home, Works with Alexa, VPN Server, Parental Control&QoS (Archer A7)"
            price={89.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51R2a9p-vNL._AC_SL1000_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
