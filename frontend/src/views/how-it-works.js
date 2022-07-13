import React, { useEffect } from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import { Button, Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core';
// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import styled from "styled-components";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import { Link } from "react-router-dom";

const Icon = styled(props => (
  <div {...props}>
    <div className="minus">-</div>
    <div className="plus">+</div>
  </div>
))`
  & > .plus {
    display: block;
    color: #4cc0e9;
    font-size: 24px;
  }
  & > .minus {
    display: none;
    color: #4cc0e9;
    font-size: 24px;
  }
  .Mui-expanded & > .minus {
    display: flex;
  }
  .Mui-expanded & > .plus {
    display: none;
  }
`;

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

// Scroll to Top
function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

export default function HowItWorks(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChangeFaq = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="inner_header">
      <Header
        fixed
        color="transparent"
        routes={dashboardRoutes}
        brand={<img src={require("../assets/images/logo.png")} alt="logo" className="img-fluid"/>}
        rightLinks={<HeaderLinks />}
        changeColorOnScroll={{
          height: 50,
          color: "dark"
        }}
        {...rest}
      />
      <ScrollToTopOnMount/>
      <div className={classes.pageHeader + " inner_pageheader"}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div className="d-flex align-items-center">
                <h2 className="inner_title">How it Works</h2>
              </div>
            </GridItem>
          </GridContainer>
        </div>
        <div className="container">
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} className="m-auto">
              <div className="faq_panel">
                <Accordion expanded={expanded === 'panel1'} onChange={handleChangeFaq('panel1')} className="mt-5">
                  <AccordionSummary expandIcon={<Icon />} aria-controls="panel1bh-content" id="panel1bh-header">
                    <div className="accordian_head"><h2>What are BEP and ERC tokens?</h2></div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="accordian_para">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                  </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel2'} onChange={handleChangeFaq('panel2')}>
                  <AccordionSummary expandIcon={<Icon />} aria-controls="panel2bh-content" id="panel2bh-header">
                    <div className="accordian_head"><h2>What does “minting” mean?</h2></div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="accordian_para">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                  </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel3'} onChange={handleChangeFaq('panel3')}>
                  <AccordionSummary expandIcon={<Icon />} aria-controls="panel3bh-content" id="panel3bh-header">
                    <div className="accordian_head"><h2>Can I create an NFT on Ultrasafe without putting it on sale?</h2></div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="accordian_para">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                  </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel4'} onChange={handleChangeFaq('panel4')}>
                  <AccordionSummary expandIcon={<Icon />} aria-controls="panel4bh-content" id="panel4bh-header">
                    <div className="accordian_head"><h2>Can I change the price of an already created NFT?</h2></div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="accordian_para">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                  </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel5'} onChange={handleChangeFaq('panel5')}>
                  <AccordionSummary expandIcon={<Icon />} aria-controls="panel5bh-content" id="panel4bh-header">
                    <div className="accordian_head"><h2>What is the purpose of $Ultrasafe as a governance token?</h2></div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="accordian_para">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                  </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel6'} onChange={handleChangeFaq('panel6')}>
                  <AccordionSummary expandIcon={<Icon />} aria-controls="panel6bh-content" id="panel4bh-header">
                    <div className="accordian_head"><h2>I would like to suggest additional features!</h2></div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="accordian_para">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
            </GridItem>
            {/* <GridItem xs={12} sm={6} md={6}>
              <div className="faq_panel">
                <Accordion expanded={expanded === 'panel7'} onChange={handleChangeFaq('panel7')}>
                  <AccordionSummary expandIcon={<Icon />} aria-controls="panel7bh-content" id="panel4bh-header">
                    <div className="accordian_head"><h2>7. NFT? ERC- tokens?</h2></div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="accordian_para">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                  </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel8'} onChange={handleChangeFaq('panel8')}>
                  <AccordionSummary expandIcon={<Icon />} aria-controls="panel8bh-content" id="panel4bh-header">
                    <div className="accordian_head"><h2>8. What does “minting” mean?</h2></div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="accordian_para">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                  </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel9'} onChange={handleChangeFaq('panel9')}>
                  <AccordionSummary expandIcon={<Icon />} aria-controls="panel9bh-content" id="panel4bh-header">
                    <div className="accordian_head"><h2>9. Can I create an NFT on rarible.com without putting it on sale?</h2></div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="accordian_para">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                  </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel10'} onChange={handleChangeFaq('panel10')}>
                  <AccordionSummary expandIcon={<Icon />} aria-controls="panel10bh-content" id="panel4bh-header">
                    <div className="accordian_head"><h2>10. Can I change the price of an already created collectible?</h2></div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="accordian_para">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                  </AccordionDetails>
                </Accordion>
                
                <Accordion expanded={expanded === 'panel11'} onChange={handleChangeFaq('panel11')}>
                  <AccordionSummary expandIcon={<Icon />} aria-controls="panel11bh-content" id="panel4bh-header">
                    <div className="accordian_head"><h2>11. What is the purpose of $RARI as a governance token?</h2></div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="accordian_para">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                  </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel12'} onChange={handleChangeFaq('panel12')}>
                  <AccordionSummary expandIcon={<Icon />} aria-controls="panel11bh-content" id="panel4bh-header">
                    <div className="accordian_head"><h2>12. I would like to suggest additional features!</h2></div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="accordian_para">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
            </GridItem> */}
          </GridContainer>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
