/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Output from "./Output";
import ClassOneBg from "../Image/t4.jpg";
import ClassTwoBg from "../Image/t2.jpg";
import ClassThreeBg from "../Image/t1.jpg";
import ClassFourBg from "../Image/1.1.jpg";

const Results = ({ training }) => (
  <div css={styles} className="results">
    {training === "FirstClass" && (
      <Output
        title="TRUEFORMA COLPRO"
        info="TRUEFORMA COLPRO is muscles and protect joints in your most loving flavour : Summer Divine Flavour ."
        img={ClassOneBg}
      />
    )}

    {training === "SecondClass" && (
      <Output
        title="INSANE LABZ PSYCHOTIC"
        info="Insane Labz Psychotic is a pre-workout supplement that is marketed as a high-stimulant and energy-boosting product.It is commonly used by individuals who engage in intense workouts or physical activities and are looking
         for an extra boost of energy and focus during their training sessions."
        img={ClassTwoBg}
      />
    )}
    {training === "ThirdClass" && (
      <Output
        title="L-CARNITINE 3200 "
        info="L-Carnitine 3200 is a dietary supplement that 
        contains the amino acid L-carnitine in a high-potency form. 
        L-carnitine is a naturally occurring compound that plays
         a crucial role in energy production within the body."
        img={ClassThreeBg}
      />
    )}

    {training === "FourthClass" && (
      <Output
        title="MUSCLETECH:NITRO TRACK"
        info="MuscleTech is a well-known brand that offers a variety of sports nutrition supplements, including pre-workouts, protein powders, and muscle-building formulas."
        img={ClassFourBg}
      />
    )}
  </div>
);

const styles = css`
  width: 100%;
  max-width: 60%;
  .test {
    width: 100%;
    height: 400px;
    background: red;
    &.two {
      background: blue;
    }
  }
  @media(max-width: 900px){
    max-width: 590px;
    padding: 30px 0 0 0;
  }
  @media (min-width: 901px) and (max-width: 1226px){
    max-width: 62%;
  }
`;

export default Results;
