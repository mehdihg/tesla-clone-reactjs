import React, { useRef } from "react";

import Section from "./Section";
import Footer from "../Footer/Footer";
import { IoChevronDown } from "react-icons/io5";
import useScrollSnap from "react-use-scroll-snap";
import modelS from "../../images/origs.jpg";
import modelY from "../../images/model-y.jpg";
import model3 from "../../images/model-3.jpg";
import modelX from "../../images/modelxorig.jpg";
import solarPanel from "../../images/solar-panel.jpg";
import sloarRoof from "../../images/solar-roof.jpg";
import accessories from "../../images/accessories.jpg";

const HomePage = () => {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });

  return (
    <div ref={scrollRef} id="home">
      <Section
        id="one"
        titleOne="Model S"
        titleTwo="Order Online for Touchless Delivery"
        ButtonDark="CUSTOM ORDER"
        ButtonLight="EXISTING INVENTORY"
        chevron={<IoChevronDown />}
        image={modelS}
      />
      <Section
        className="buttons-section"
        id="two"
        titleOne="Model Y"
        titleTwo="Order Online for Touchless Delivery"
        ButtonDark="CUSTOM ORDER"
        ButtonLight="EXISTING INVENTORY"
        image={modelY}
      />
      <Section
        className="buttons-section"
        id="three"
        titleOne="Model 3"
        titleTwo="Order Online for Touchless Delivery"
        ButtonDark="CUSTOM ORDER"
        ButtonLight="EXISTING INVENTORY"
        image={model3}
      />
      <Section
        className="buttons-section"
        id="four"
        titleOne="Model X"
        titleTwo="Order Online for Touchless Delivery"
        ButtonDark="CUSTOM ORDER"
        ButtonLight="EXISTING INVENTORY"
        image={modelX}
      />
      <Section
        className="buttons-section"
        id="five"
        titleOne="Solar Panels"
        titleTwo="Lowest Cost Solar Panels in America"
        ButtonDark="ORDER NOW"
        ButtonLight="LEARN MORE"
        image={solarPanel}
      />
      <Section
        className="buttons-section"
        id="six"
        titleOne="Solar Roof"
        titleTwo="Produce Clean Energy From Your Roof"
        ButtonDark="ORDER NOW"
        ButtonLight="LEARN MORE"
        image={sloarRoof}
      />
      <Section
        className="last-section-buttons"
        id="seven"
        titleOne="Solar Roof"
        ButtonDark="SHOP NOW"
        image={accessories}
        footer={<Footer />}
      />
    </div>
  );
};

export default HomePage;

