import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        image="model-s.jpg"
        leftBtn="CUSTOM ORDER"
        rightBtn="EXISTING INVENTORY"
        icon="true"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        image="model-3.jpg"
        leftBtn="CUSTOM ORDER"
        rightBtn="EXISTING INVENTORY"
        icon="false"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        image="model-x.jpg"
        leftBtn="CUSTOM ORDER"
        rightBtn="EXISTING INVENTORY"
        icon="false"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        image="model-y.jpg"
        leftBtn="CUSTOM ORDER"
        rightBtn="EXISTING INVENTORY"
        icon="false"
      />
      <Section
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        image="solar-panel.jpg"
        leftBtn="ORDER NOW"
        rightBtn="LEARN MORE"
        icon="false"
      />
      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        image="solar-roof.jpg"
        leftBtn="ORDER NOW"
        rightBtn="LEARN MORE"
        icon="false"
      />
      <Section
        title="Accessories"
        description=""
        image="accessories.jpg"
        leftBtn="SHOP NOW"
        icon="false"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
