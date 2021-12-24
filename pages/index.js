import Section from "../components/Section";
import React, { createRef, useState, useEffect } from "react";
import Link from "next/Link";
import { Link as ScrollLink, scroller, Element } from "react-scroll";

import useMediaQuery from "@mui/material/useMediaQuery";

import styles from "../styles/styles.module.css";

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  const isMobile = useMediaQuery("(min-width:768px)");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  return (
    <div>
      <Section id="usecases">
        <Element name="usecases">
          <div className={styles.container}>
            <h1>Click the #hashtags</h1>
            <div>
              <h5>
                <ScrollLink
                  activeClass="active"
                  className="casino"
                  to="casino"
                  smooth={true}
                  duration={1000}
                  delay={200}
                  offset={isMobile ? 50 : 0}
                  href="#casino"
                  ref={createRef()}
                >
                  <a>#casino</a>
                </ScrollLink>{" "}
                <ScrollLink
                  activeClass="active"
                  className="passport"
                  to="passport"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  delay={200}
                  offset={!isMobile ? 50 : 0}
                  href="#passport"
                  ref={createRef()}
                >
                  <a>#passport</a>
                </ScrollLink>{" "}
                <ScrollLink
                  activeClass="active"
                  className="bank"
                  to="bank"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  delay={200}
                  offset={!isMobile ? 50 : 0}
                  href="#bank"
                  ref={createRef()}
                >
                  <a>#bank</a>
                </ScrollLink>{" "}
                <ScrollLink
                  activeClass="active"
                  className="documents"
                  to="documents"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  delay={200}
                  offset={!isMobile ? 50 : 0}
                  href="#documents"
                  ref={createRef()}
                >
                  <a>#documents</a>
                </ScrollLink>
              </h5>
            </div>
            <div>
              <Link href="/other">
                <a>Another Page</a>
              </Link>
            </div>
          </div>
        </Element>
      </Section>
      <Section id="casino">
        <div className={styles.container1}>
          <h1>Casino</h1>
          <h3>Some useful information</h3>
        </div>
      </Section>
      <Section id="passport">
        <div className={styles.container2}>
          <h1>Passport</h1>
          <h3>Some useful information</h3>
        </div>
      </Section>
      <Section id="bank">
        <div className={styles.container3}>
          <h1>Bank</h1>
          <h3>Some useful information</h3>
        </div>
      </Section>
      <Section id="documents">
        <div className={styles.container4}>
          <h1>Documents</h1>
          <h3>Some useful information</h3>
        </div>
      </Section>
      {showButton && (
        <button onClick={scrollToTop} className={styles.backtotop}>
          &#8673;
        </button>
      )}
    </div>
  );
}
