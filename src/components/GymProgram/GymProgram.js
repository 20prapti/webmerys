/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Icon from "../GlobalComponents/Icon";
import GymTitle from "./GymTitle";
import GymSubtitle from "./GymSubtitle";
import GymProgramCard from "./GymProgramCard";
//import GymProgramCard1 from "./GymProgramCard1";

import Container from "../GlobalComponents/Container";

const GymProgram = () => (
  <div css={styles} className="gymProgram">
    <GymTitle />
    <Icon />
    <GymSubtitle />
    <Container>
      <GymProgramCard
        title="Multivitamins: "
        desc=" Multivitamin supplements typically contain a combination of essential vitamins and minerals. They can help fill nutritional gaps in the diet."
      />
      <GymProgramCard
        title="Omega-3 Fatty Acids"
        desc="Omega-3 supplements, often derived from fish oil or algae, are rich in essential fatty acids like EPA and DHA. "
      />
      <GymProgramCard
        title="Probiotics"
        desc="Probiotic supplements contain live beneficial bacteria that can help maintain a healthy balance of gut flora. They may support digestive health."
      />
      <GymProgramCard
        title="Vitamin D"
        desc=" Vitamin D supplements are commonly taken to address deficiencies, especially in regions with limited sunlight exposure. ."
      />
      <GymProgramCard
        title="Calcium"
        desc=" Calcium supplements are often recommended for individuals who don't consume enough calcium-rich foods."
      />
      <GymProgramCard
        title="Iron"
        desc=" Iron supplements are commonly used to address iron deficiency anemia, particularly in individuals with low iron levels or certain medical conditions."
      />
    </Container>
  </div>
);

const styles = css`
  width: 100%;
  min-height: 100vh;
  text-align: center;
  padding: 120px 0;
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 40px 0;
  }
  @media (max-width: 700px) {
    .container {
      flex-direction: column;
      justify-content: flex-start;
    }
  }
  @media (min-width: 701px) and (max-width: 1100px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default GymProgram;
