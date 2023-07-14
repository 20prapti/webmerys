/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Button from "../GlobalComponents/Button";

import GymOverlayBg from "../Image/9viJ.gif";

const Member = ({ text }) => (
  <section css={styles} className="member">
    <h2>
      BRIDGING<span> BUISNESS</span>,TECHNICAL <span>SOLUTION</span>!
    </h2>
    <p>
    Transforming businesses through tailored technology.
      <br /> #Innovation #Collaboration #Success Unleashed #Unlocking potential #Driving growth.
    </p>
    <Button text="MISSION" />
  </section>
);

const styles = css`
  width: 100%;
  padding: 120px 0;
  text-align: center;
  background: url('${GymOverlayBg}') no-repeat center/cover;
  h2 {
    color: #fff;
    font-weight: 900;
    font-size: 36px;
    letter-spacing: 1.3px;
    line-height: 1;
    span {
      color: #ed563b;
    }
  }
  p {
    color: #fff;
    font-size: 16px;
    line-height: 1.7;
    margin: 20px 0;
  }
  @media(max-width: 850px) {
    h2{
      font-size: 30px;
    }
    p{
      padding: 0 20px;
      br{
        display: none;
      }
    }
  }
`;

export default Member;
