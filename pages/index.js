import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/styles.module.css";
import Link from "next/link";
import { SectionsContainer, Section } from "react-fullpage";

export default function Home({ props }) {
  const options = {
    activeClass: "active", // the class that is appended to the sections links
    anchors: ["use-cases", "casino", "passport", "bank", "documents"], // the anchors for each sections
    arrowNavigation: true, // use arrow keys
    className: "SectionContainer", // the class name for the section container
    delay: 1000, // the scroll animation speed
    navigation: false, // use dots navigation
    scrollBar: false, // use the browser default scrollbar
    sectionClassName: "Section", // the section class name
    sectionPaddingTop: "0", // the section top padding
    sectionPaddingBottom: "0", // the section bottom padding
    verticalCentered: true, // align the content of each section vertical
  };

  return (
    <div>
      <Head>
        <title>Detmar's Scroll Sample</title>
        <meta name="keywords" content="scrolling" />
      </Head>
      <SectionsContainer {...options}>
        <Section>
          <div className={styles.containertop}>
            <h1>Click the #hashtags</h1>
            <div className={styles.list}>
              <h5>
                <a href="#casino">#casino</a> <a href="#passport">#passport</a>{" "}
                <a href="#bank">#bank</a> <a href="#documents">#documents</a>{" "}
              </h5>
            </div>
            <div>
              <Link href="/other">
                <a>Another Page</a>
              </Link>
            </div>
          </div>
        </Section>
        <Section>
          <div className={styles.container}>
            <h1>Casino</h1>
            <h3>Some useful information</h3>
          </div>
        </Section>
        <Section>
          <div className={styles.container1}>
            <h1>Passport</h1>
            <h3>Some useful information</h3>
          </div>
        </Section>
        <Section>
          <div className={styles.container2}>
            <h1>Bank</h1>
            <h3>Some useful information</h3>
          </div>
        </Section>
        <Section>
          <div className={styles.container3}>
            <h1>Documents</h1>
            <h3>Some useful information</h3>
            <button>
              TOP
              <a href="#use-cases">TOP</a>
            </button>
          </div>
        </Section>
      </SectionsContainer>
    </div>
  );
}
