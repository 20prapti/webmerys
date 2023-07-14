/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Button from "../GlobalComponents/Button";
import React from "react";
import Icon from "../GlobalComponents/Icon";
import TrainerCard from "./TrainerCard";
import Container from "../GlobalComponents/Container";
import webdevelopment from "../Image/7jiL.gif";
import Android from "../Image/andriod.gif";
import uiux from "../Image/uiux.gif";
import sc from"../Image/sc.gif";
import digimarketing from"../Image/digi marketing.gif";
import blockchain from "../Image/blockchain.gif";

const Trainers = () => (
  <section css={styles} className="trainers" id="trainers">
    <h2>
      OUR <span>SERVICES</span>
    </h2>
    <Icon />
    <p>
      
Dedicated team of tech enthusiasts transforming businesses through {" "}
      <br />
      innovation. Tailored services, bridging business requirements with technical solutions. Trusted
 technology partner for growth and success in the digital landscape.
    </p>
    <Container>
      <TrainerCard
       
        name="Web Development"
        desc="We create captivating websites that not only look great 
        but also deliver a seamless user experience. Our expertise in
         coding and design ensures your online presence 
        is professional, engaging, and aligned with your business goals."
        img={webdevelopment}
      />
      <TrainerCard
     
     name="UI/UX Design"
     desc="We design visually appealing and 
     user-friendly interfaces that make navigating your website
      or app a breeze. Our focus is on creating intuitive 
      experiences that keep users engaged, satisfied, and 
      coming back for more."
     img={uiux}
   />
      <TrainerCard
       
        name="Android App Development"
        desc="We build custom Android applications tailored to your
         specific needs. From intuitive interfaces to efficient
          functionality, our apps are designed to captivate users 
        and maximize the potential of mobile technology for your business. "
        img={Android}
      />
      
      </Container>
<Container>
<TrainerCard
     
     name="BlockChain Development"
     desc="Harnessing the power of blockchain, 
     we develop secure and decentralized applications that transform 
     industries. From cryptocurrencies to supply chain solutions, 
     we leverage blockchain's
      potential to enhance transparency, security, and efficiency."
     img={blockchain}
   />

<TrainerCard
     
     name="Smart Contract Development"
     desc="Automate and streamline your business processes with smart 
     contracts. We create self-executing contracts on the blockchain
      that ensure trust, accuracy, and cost savings while reducing 
      the risk of human error.
     "
     img={sc}
   />

<TrainerCard
     
     name="Digital Marketing"
     desc="We drive your business growth through targeted digital 
     marketing strategies. From social media campaigns to content 
     creation and data-driven analytics, we help you reach and engage your
      target audience effectively, generating leads and expanding
       your online presence."

       
     img={digimarketing}
   />
   
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  padding: 120px 0;
  text-align: center;
  h2 {
    color: #232d39;
    font-weight: 900;
    font-size: 36px;
    letter-spacing: 1.3px;
    line-height: 1;
    span {
      color: #ed563b;
    }
  }
  > p {
    color: #7a7a7a;
    font-size: 16px;
    line-height: 1.7;
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 0 0 0;
  }
  @media (max-width: 650px) {
    > p {
      padding: 0 30px;
      br {
        display: none;
      }
    }
  }
  @media (max-width: 830px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
  @media (min-width: 831px) and (max-width: 1226px) {
    .container {
      flex-wrap: wrap;
      justify-content: space-between;
      max-width: 780px;
    }
  }
`;

export default Trainers;
