import Section from "../../components/Section";
import React, { createRef, useState, useEffect } from "react";
import Link from "next/Link";

import styles from "../../styles/styles.module.css";

export default function NewScroller() {
  const [showButton, setShowButton] = useState(false);

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
        <div className={styles.container}>
          <h1>Click the #hashtags</h1>
          <div>
            <h5>
              <Link activeClass="active" href="#casino" ref={createRef()}>
                <a>#casino</a>
              </Link>{" "}
              <Link activeClass="active" href="#passport" ref={createRef()}>
                <a>#passport</a>
              </Link>{" "}
              <Link activeClass="active" href="#bank" ref={createRef()}>
                <a>#bank</a>
              </Link>{" "}
              <Link activeClass="active" href="#documents" ref={createRef()}>
                <a>#documents</a>
              </Link>
            </h5>
          </div>
          <div>
            <Link href="/other">
              <a>Another Page</a>
            </Link>
          </div>
        </div>
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
